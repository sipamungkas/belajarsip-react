import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import DashboardMain from "../components/DashboardMain";
import Notification from "../components/Notification";
import Backdrop from "../components/Backdrop";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      showBackdrop: true,
    };
  }

  setShowMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  render() {
    const { user } = this.props.location.state;
    const { showMessage, showBackdrop } = this.state;
    return (
      <>
        <Sidebar onShowMessage={() => this.setShowMessage} user={user} />
        <DashboardMain
          mode={user.role || "member"}
          showMessage={showMessage}
          onShowMessage={() => this.setShowMessage}
          user={user}
        />
        <Notification />
        {showBackdrop && <Backdrop />}
      </>
    );
  }
}
