import React from "react";
import PropTypes from "prop-types";

function ResetRightSide(props) {
  const { step } = props;
  if (step === "1") {
    return (
      <div className="right-side">
        <h1>Reset Password</h1>
        <div>
          <h2>Enter your email address linked to this account.</h2>
          <h3>We will send you the verification code to reset your password</h3>
        </div>
        <div>
          <div className="form-container">
            <input type="text" id="username" placeholder="Username or Email" />
            <label htmlFor="username">Username or Email</label>
          </div>
          <div className="btn-container">
            <div className="btn-login">Send</div>
          </div>
        </div>
      </div>
    );
  }
  if (step === "2") {
    return (
      <div className="right-side">
        <h1>Reset Password</h1>
        <div>
          <h2>Enter verification code we just sent to your email address</h2>
        </div>
        <div>
          <div>
            <div className="form-container d-flex flex-row justify-content-between align-items-center px-3">
              <input
                maxLength={1}
                tabIndex={1}
                className="activation-code"
                type="text"
              />
              <input
                maxLength={1}
                tabIndex={1}
                className="activation-code"
                type="text"
              />
              <input
                maxLength={1}
                tabIndex={1}
                className="activation-code"
                type="text"
              />
              <input
                maxLength={1}
                tabIndex={1}
                className="activation-code"
                type="text"
              />
            </div>
            <div className="resend">
              Didn’t receive a code? <span>Resend</span>
            </div>
          </div>
          <div className="btn-container">
            <div className="btn-login">Send</div>
          </div>
        </div>
      </div>
    );
  }
}

ResetRightSide.propTypes = {
  step: PropTypes.string,
};

export default ResetRightSide;
