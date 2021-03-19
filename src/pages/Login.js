import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "../styles/login.css";
import googleIcon from "../assets/images/icons/google-icon.svg";
import eyeIcon from "../assets/images/icons/eye-icon.svg";
import eyeSlashIcon from "../assets/images/icons/eye-slash-icon.svg";
import InputForm from "../components/InputForm";

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

          <InputForm
            type={"text"}
            forId={"username"}
            placeholder={"Username or Email"}
            label={"Username or Email"}
            onChange={(e) => this.setState({ username: e.target.value })}
          />

          <InputForm
            type={"password"}
            forId={"password"}
            placeholder={"Password"}
            label={"password"}
            onChange={(e) => this.setState({ password: e.target.value })}
            additional={
              <Link to="/reset-password?s=1" className="col-12 forgot-password">
                Forgot password?
              </Link>
            }
          />

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
