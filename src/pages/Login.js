import React, { Component, Fragment } from "react";
import "../styles/login.css";
import googleIcon from "../assets/images/icons/google-icon.svg";
import eyeIcon from "../assets/images/icons/eye-icon.svg";

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="container d-flex flex-column align-items-center justify-content-center col-10 col-md-6 col-lg-5 col-xl-4 login-container">
          <h1>Login</h1>
          <div className="form-container mb-3">
            <input type="text" id="username" placeholder="Username or Email" />
            <label htmlFor="username">Username or Email</label>
          </div>
          <div className="form-container">
            <input type="text" id="username" placeholder="password" />
            <label htmlFor="username">Password</label>
          </div>
          <div className="col-12 forgot-password">Forgot password?</div>
          <div className="btn-container">
            <div className="btn-login">Login</div>
            <div className="btn-google">
              <img src={googleIcon} alt="google icon" />
              Login with google
            </div>
          </div>
          <div class="new-user">
            New user? <span>Register</span>
          </div>
        </div>
      </>
    );
  }
}
