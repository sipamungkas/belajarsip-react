import React, { Component } from "react";
import ResetPassword1 from "./ResetPassword1";
import ResetPassword2 from "./ResetPassword2";
import ResetPassword3 from "./ResetPassword3";

export default class ResetPassword extends Component {
  render() {
    const { params } = this.props.match;
    console.log(params);
    if (params.id === undefined || params.id > "4" || params.id === "1") {
      return <ResetPassword1 />;
    }
    if (params.id === "2") {
      return <ResetPassword2 />;
    }

    if (params.id === "3") {
      return <ResetPassword3 />;
    }

    return <div></div>;
  }
}
