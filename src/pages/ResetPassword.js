import React, { Component } from "react";
import { Link } from "react-router-dom";
import qs from "query-string";
import "../styles/resetPassword.css";
import ResetLeftSide from "../components/ResetLeftSide";
import ResetRightSide from "../components/ResetRightSide";

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
    console.log(this.state);
    return (
      <div className="reset-container">
        <Link to="/" className="back-to-home">
          <img
            src="/assets/images/icons/back-icon.svg"
            className="back-icon"
            alt="Back Icon"
          />
        </Link>
        <ResetLeftSide step={queryString.step > 2 ? "2" : "1"} />
        <ResetRightSide
          step={queryString.step}
          onChangeHandler={() => this.onChangeHandler}
        />
      </div>
    );
  }
}

export default ResetPassword;
