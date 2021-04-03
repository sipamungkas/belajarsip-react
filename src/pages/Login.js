import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import googleIcon from "../assets/images/icons/google-icon.svg";
import InputForm from "../components/InputForm";
// import { users } from "../data/users";
import { BASE_URL } from "../constant";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: false,
    };
  }
  eyeIconHandler = (e) => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  auth = () => {
    const { username, password } = this.state;
    // const user = users.find(
    //   (user) => user.username === username && user.password === password
    // );
    // if (user) {
    //   this.props.history.push({ pathname: "/dashboard", state: { user } });
    // }
    axios
      .post(`${BASE_URL}users/auth`, { username, password })
      .then((res) => {
        console.log("tes", res.data);
        this.setState({ error: false });
        this.props.history.push({
          pathname: "/dashboard",
          state: { user: res.data.data },
        });
      })
      .catch((err) => {
        console.log(err, "gagal login");
        this.setState({ error: true });
      });
  };

  loginFailed = () => {
    return <h4 style={{ color: "red" }}>Login Failed</h4>;
  };
  render() {
    console.log(this.state);
    return (
      <>
        <div className="container d-flex flex-column align-items-center justify-content-center col-10 col-md-6 col-lg-5 col-xl-4 login-container">
          <h1>Login</h1>
          {this.state.error ? this.loginFailed() : ""}
          <form className={"w-100"}>
            <InputForm
              type={"text"}
              forId={"username"}
              placeholder={"Username or Email"}
              label={"Username or Email"}
              onChangeHandler={(e) =>
                this.setState({ username: e.target.value })
              }
            />

            <InputForm
              type={"password"}
              forId={"password"}
              placeholder={"Password"}
              label={"password"}
              onChangeHandler={(e) =>
                this.setState({ password: e.target.value })
              }
              additional={
                <Link to="/reset-password" className="col-12 forgot-password">
                  Forgot password?
                </Link>
              }
            />
          </form>

          <div className="btn-container">
            <div className="btn-login" onClick={() => this.auth()}>
              Login
            </div>
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
