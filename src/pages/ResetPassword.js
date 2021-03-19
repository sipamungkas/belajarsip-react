import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/resetPassword.css";

class ResetPassword extends Component {
  render() {
    return (
      <div className="reset-container">
        <Link to="/" className="back-to-home">
          <img
            src="/assets/images/icons/back-icon.svg"
            className="back-icon"
            alt="Back Icon"
          />
        </Link>
        <div className="left-side">
          <img
            src="/assets/images/ilustration/question-ilustration.svg"
            className="question-ilustration"
            alt="question ilustration"
          />
        </div>
        <div className="right-side">
          <h1>Reset Password</h1>
          <div>
            <h2 className="mb-2">
              Enter your email address linked to this account.
            </h2>
            <h3>
              We will send you the verification code to reset your password
            </h3>
          </div>
          <div>
            <div className="form-container mb-3">
              <input
                type="text"
                id="username"
                placeholder="Username or Email"
              />
              <label htmlFor="username">Username or Email</label>
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
