import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import DashboardMain from "../components/DashboardMain";
import Notification from "../components/Notification";
import Backdrop from "../components/Backdrop";

export default class DashboardFU extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      showNotification: false,
    };
  }

  setShowMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };
  setShowNotification = () => {
    this.setState({ showNotification: !this.state.showNotification });
  };

  render() {
    const { showMessage, showNotification } = this.state;
    const { user } = this.props.location.state;
    return (
      <>
        <Sidebar
          onShowMessage={() => this.setShowMessage}
          user={user}
          onNotificationClick={() => this.setShowNotification}
        />
        <DashboardMain
          showMessage={showMessage}
          onShowMessage={() => this.setShowMessage}
        />
        {showNotification && (
          <Notification onNotificationClick={() => this.setShowNotification} />
        )}
        {showNotification && <Backdrop />}
      </>
    );
  }
}
