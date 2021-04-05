import React, { Component } from "react";
import ResetSendOtp from "../components/ResetSendOtp";
import ResetOtpVerification from "../components/ResetOtpVerification";
import ResetNewPassword from "../components/ResetNewPassword";

export default class ResetPassword extends Component {
  render() {
    const { params } = this.props.match;
    if (params.id === undefined || params.id > "4" || params.id === "1") {
      return <ResetSendOtp />;
    }
    if (params.id === "2") {
      return <ResetOtpVerification />;
    }

    if (params.id === "3") {
      return <ResetNewPassword />;
    }

    return <div></div>;
  }
}
