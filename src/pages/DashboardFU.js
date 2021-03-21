import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import DashboardMain from "../components/DashboardMain";

export default class DashboardFU extends Component {
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
    const { showMessage } = this.state;
    return (
      <>
        <Sidebar onShowMessage={() => this.setShowMessage} />
        <DashboardMain
          showMessage={showMessage}
          onShowMessage={() => this.setShowMessage}
        />
      </>
    );
  }
}
