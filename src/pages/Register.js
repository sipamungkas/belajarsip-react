import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";
import googleIcon from "../assets/images/icons/google-icon.svg";
import eyeIcon from "../assets/images/icons/eye-icon.svg";
import eyeSlashIcon from "../assets/images/icons/eye-slash-icon.svg";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
    };
  }

  eyeIconHandler = (e) => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  passwordValidation = (password) => {
    if (password && password.length < 8) {
      return (
        <span className="password-match" style={{ color: "black" }}>
          Must be at least 8 character
        </span>
      );
    }
    return "";
  };

  passwordMatch = (password, confirmPassword) => {
    if (password && confirmPassword) {
      return (
        <span
          className={
            confirmPassword === password
              ? "password-match"
              : "password-no-match"
          }
        >
          {confirmPassword === password
            ? "Password Match"
            : "Password does not Match"}
        </span>
      );
    }
    return "";
  };

  render() {
    console.log(this.state);
    const { showPassword, email, password, confirmPassword } = this.state;
    return (
      <>
        <div className="container d-flex flex-column align-items-center justify-content-center col-10 col-md-6 col-lg-5 col-xl-5 register-container">
          <h1>Register</h1>
          <div className="form-container mb-3">
            <input
              type="text"
              id="username"
              placeholder="Username"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="form-container mb-3">
            <input
              type="text"
              id="email"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-container mb-3">
            {this.passwordValidation(password)}
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

          <div className="form-container">
            {this.passwordMatch(password, confirmPassword)}
            <input
              type={showPassword ? "text" : "password"}
              id="confirm"
              placeholder="Confirm Password"
              onChange={(e) =>
                this.setState({ confirmPassword: e.target.value })
              }
            />
            <label htmlFor="confirm">Confirm Password</label>
            <img
              className="eye-icon"
              src={showPassword ? eyeSlashIcon : eyeIcon}
              alt="eye icon"
              onClick={this.eyeIconHandler}
            />
          </div>

          <div className="btn-container">
            <div className="btn-login">Register</div>
            <div className="btn-google">
              <img src={googleIcon} alt="google icon" />
              Register with google
            </div>
          </div>
          <Link to="/" className="new-user">
            Already have account? <span>Login</span>
          </Link>
        </div>
      </>
    );
  }
}
