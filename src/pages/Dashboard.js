import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import DashboardMain from "../components/DashboardMain";

export default class Dashboard extends Component {
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
    const { user } = this.props.location.state;
    const { showMessage } = this.state;
    return (
      <>
        <Sidebar onShowMessage={() => this.setShowMessage} user={user} />
        <DashboardMain
          mode={user.role || "member"}
          showMessage={showMessage}
          onShowMessage={() => this.setShowMessage}
          user={user}
        />
      </>
    );
  }
}
