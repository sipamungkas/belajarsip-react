import React, { Component } from "react";
import Activity from "../pages/Activity";
import ActivityFasilitator from "../pages/ActivityFasilitator";

export default class DashboardActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props.location.state;
    console.table(user);
    if (user.role === "fasilitator") {
      return <ActivityFasilitator user={user} history={this.props.history} />;
    }
    return <Activity user={user} history={this.props.history} />;
  }
}
