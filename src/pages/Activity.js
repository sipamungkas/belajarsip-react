import React, { Component } from "react";
import Sidebar from "../components/Sidebar";

export default class Activity extends Component {
  constructor() {
    super();
    this.state = {
      showMessage: false,
    };
  }

  setShowMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };
  render() {
    return (
      <div>
        <Sidebar onShowMessage={() => this.setShowMessage} />
      </div>
    );
  }
}
