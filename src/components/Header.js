import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [keyword, setKeyword] = useState("");

  let history = useHistory();
  useEffect(() => {
   
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <NavLink className="navbar-brand" to="/">
        Car Booking Agency
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cars">
              Book a Car
            </NavLink>
          </li>
          {userInfo && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-bookings">
                My Bookings
              </NavLink>
            </li>
          )}

          <li className="nav-item">
            {userInfo ? (
              <span onClick={handleLogout} className="nav-link">
                Logout
              </span>
            ) : (
              <NavLink exact className="nav-link" to="/login">
                Login
              </NavLink>
            )}
          </li>
        </ul>
        <form onSubmit={submitHandler} className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
