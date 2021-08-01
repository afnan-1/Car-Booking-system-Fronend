import Alert from "@material-ui/lab/Alert";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/actions/userActions";
import { Grid, LinearProgress } from "@material-ui/core";
import { USER_RESET } from "../store/constants/userConstants";
export default function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, success } = userRegister;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    mobile_no: "",
    is_driver: false,
  });
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
    if (success) {
      dispatch({ type: USER_RESET });
      history.push("/login");
    }
  }, [userInfo, dispatch,success]);

  const handleChange = (e) => {
    if (e.target.name == "is_driver") {
      if (e.target.checked) {
        setuserData({ ...userData, is_driver: true });
      } else {
        setuserData({ ...userData, is_driver: false });
      }
    } else {
      setuserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <>
      {loading && <LinearProgress color="secondary" />}

      <div className="auth-wrapper">
        {userInfo && (
          <Alert severity={"success"}>Registered successfully.</Alert>
        )}

        <form className="auth-inner" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          {error && (
            <Alert className="mt-2" severity="error">
              {error}
            </Alert>
          )}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Mobile No</label>
            <input
              type="text"
              onChange={handleChange}
              name="mobile_no"
              required
              className="form-control"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              className="form-control"
              required
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <input type="checkbox" name="is_driver" onChange={handleChange} />
            <label className="ml-2"> Are You Seller / Driver</label>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/login">Sign in?</Link>
          </p>
        </form>
      </div>
    </>
  );
}
