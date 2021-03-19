import React, { useState } from "react";
import eyeIcon from "../assets/images/icons/eye-icon.svg";
import eyeSlashIcon from "../assets/images/icons/eye-slash-icon.svg";
import PropTypes from "prop-types";

function InputFormPassword(props) {
  const [show, setShow] = useState(false);
  const {
    label,
    forId,
    placeholder,
    onChangeHandler,
    type,
    additional,
    mb,
  } = props;
  if (type === "password") {
    return (
      <div className={`form-container ${mb ? `mb-${mb}` : "mb-3"}`}>
        {additional}
        <input
          type={show ? "text" : "password"}
          id={forId}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
        <label htmlFor={forId}>{label}</label>
        <img
          className="eye-icon"
          src={show ? eyeSlashIcon : eyeIcon}
          alt="eye icon"
          onClick={() => setShow(!show)}
        />
      </div>
    );
  }
  return (
    <div className={`form-container ${mb ? `mb-${mb}` : "mb-3"}`}>
      {additional}
      <input
        type={type}
        id={forId}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
      <label htmlFor={forId}>{label}</label>
    </div>
  );
}

InputFormPassword.propTypes = {
  onChangeHandler: PropTypes.func,
  label: PropTypes.string,
  forId: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default InputFormPassword;
