import React, { Component } from "react";
import { Link } from "react-router-dom";
import qs from "query-string";
import "../styles/resetPassword.css";
import ResetLeftSide from "../components/ResetLeftSide";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      activationCode: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ activationCode: e.target.value });
  };

  render() {
    const { location } = this.props;
    const queryString = qs.parse(location.search);

    return (
      <div className="reset-container">
        <Link to="/" className="back-to-home">
          <img
            src="/assets/images/icons/back-icon.svg"
            className="back-icon"
            alt="Back Icon"
          />
        </Link>
        <ResetLeftSide step={queryString.s > 2 ? "2" : "1"} />
        <div className="right-side">
          <h1>Create New Password</h1>
          <div>
            <h3 className="mt-5">
              Your new password must be different from previous used password!
            </h3>
          </div>
          <div>
            <div className="resend">
              Didn’t receive a code? <span>Resend</span>
            </div>
            <div className="btn-container">
              <div className="btn-login">Send</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
