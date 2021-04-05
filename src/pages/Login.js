import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import InputForm from "../components/InputForm";
// import { users } from "../data/users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { BASE_URL } from "../constant";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  eyeIconHandler = (e) => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  auth = () => {
    const { username, password } = this.state;
    if (!username || !password)
      return toast(
        "Username/Email or Password can not be empty" ||
          "Internal server Error",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "error",
        }
      );
    axios
      .post(`${BASE_URL}auth/login`, { username, password })
      .then((res) => {
        this.setState({ error: false });
        this.props.history.push({
          pathname: "/dashboard",
          state: {
            user: {
              ...res.data.data,
              role: res.data.data.role_id === 1 ? "fasilitator" : "student",
            },
          },
        });
      })
      .catch((err) => {
        toast(err.response?.data?.message || "Internal server Error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "error",
        });
      });
  };

  render() {
    return (
      <>
        <ToastContainer />
        <div className="container d-flex flex-column align-items-center justify-content-center col-10 col-md-6 col-lg-5 col-xl-4 login-container">
          <h1>Login</h1>
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
                <Link
                  to="/reset-password"
                  tabIndex={2}
                  className="col-12 forgot-password"
                >
                  Forgot password?
                </Link>
              }
            />
          </form>

          <div className="btn-container">
            <div tabIndex={2} className="btn-login" onClick={() => this.auth()}>
              Login
            </div>
            <div className="btn-google" tabIndex={2}>
              <img
                src="/assets/images/icons/google-icon.svg"
                alt="google icon"
              />
              Login with google
            </div>
          </div>
          <Link to="/register" className="new-user" tabIndex={2}>
            New user? <span>Register</span>
          </Link>
        </div>
      </>
    );
  }
}
