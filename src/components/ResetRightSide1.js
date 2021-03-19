import React from "react";
import PropTypes from "prop-types";

function ResetRightSide(props) {
  const { step } = props;
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

ResetRightSide.propTypes = {
  step: PropTypes.string,
};

export default ResetRightSide;
