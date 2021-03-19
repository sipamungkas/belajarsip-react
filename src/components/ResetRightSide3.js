import React from "react";
import PropTypes from "prop-types";

function ResetRightSide(props) {
  return (
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
  );
}

ResetRightSide.propTypes = {
  step: PropTypes.string,
};

export default ResetRightSide;
