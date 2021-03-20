import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import DashboardMain from "../components/DashboardMain";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <DashboardMain />
      </>
    );
  }
}
