import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "../styles/login.css";
import googleIcon from "../assets/images/icons/google-icon.svg";
import eyeIcon from "../assets/images/icons/eye-icon.svg";
import eyeSlashIcon from "../assets/images/icons/eye-slash-icon.svg";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
      username: "",
      password: "",
    };
  }
  eyeIconHandler = (e) => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  render() {
    const { showPassword } = this.state;
    return (
      <>
        <div className="container d-flex flex-column align-items-center justify-content-center col-10 col-md-6 col-lg-5 col-xl-4 login-container">
          <h1>Login</h1>
          <div className="form-container mb-3">
            <input type="text" id="username" placeholder="Username or Email" />
            <label htmlFor="username">Username or Email</label>
          </div>
          <div className="form-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <label htmlFor="password">Password</label>
            <img
              className="eye-icon"
              src={showPassword ? eyeSlashIcon : eyeIcon}
              alt="eye icon"
              onClick={this.eyeIconHandler}
            />
          </div>
          <Link to="/reset-password" className="col-12 forgot-password">
            Forgot password?
          </Link>
          <div className="btn-container">
            <div className="btn-login">Login</div>
            <div className="btn-google">
              <img src={googleIcon} alt="google icon" />
              Login with google
            </div>
          </div>
          <Link to="/register" className="new-user">
            New user? <span>Register</span>
          </Link>
        </div>
      </>
    );
  }
}
