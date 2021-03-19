import React, { Component } from "react";
import { Link } from "react-router-dom";

class ResetPassword extends Component {
  render() {
    return (
      <div>
        <Link href="index.html">
          <img
            src="/assets/images/icons/back-icon.svg"
            className="back-icon"
            alt="Back Icon"
          />
        </Link>
        <div className="row col-10 col-md-12 col-lg-12">
          <div className="col-12 col-md-6 question-ilustration-container">
            <img
              src="/assets/images/ilustration/question-ilustration.svg"
              className="question-ilustration"
              alt="question ilustration"
            />
          </div>

          <div className="col-12 col-md-6 reset-form-container">
            <div className="d-flex align-items-center justify-content-center flex-column text-center">
              <h1>Reset Password</h1>
              <p className="enter-email-instruction">
                Enter your email address linked to this account.
              </p>
              <p className="reset-description-text">
                We will send you the verification code to reset your password
              </p>
            </div>
            <div className="form-group">
              <label for="email" className="form-label-materialize bg-white">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder=""
              />
            </div>
            <button className="btn btn-primary-color rounded-5px my-3">
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
