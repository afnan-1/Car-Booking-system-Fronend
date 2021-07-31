import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { login } from "../store/actions/userActions";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, dispatch]);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };
  return (
    <>
      {loading && <LinearProgress color="secondary" />}

      <div className="auth-wrapper mt-5">
        <form className="auth-inner" onSubmit={submitHandler}>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={credentials.email}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              placeholder="Enter password"
              value={credentials.password}
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
           No Login?/ <Link to='/signup'>Sign up?</Link>
          </p>{" "}
          {error && (
            <Alert className="mt-2" severity="error">
              {error}
            </Alert>
          )}
        </form>
      </div>
    </>
  );
}
