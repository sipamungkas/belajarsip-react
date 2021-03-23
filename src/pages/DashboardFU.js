import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import DashboardMain from "../components/DashboardMain";

export default class DashboardFU extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
    };
  }

  setShowMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  render() {
    const { showMessage } = this.state;
    const { user } = this.props.location.state;
    return (
      <>
        <Sidebar onShowMessage={() => this.setShowMessage} user={user} />
        <DashboardMain
          showMessage={showMessage}
          onShowMessage={() => this.setShowMessage}
        />
      </>
    );
  }
}
