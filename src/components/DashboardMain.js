import React from "react";
import "../styles/dashboardMain.css";
import DashboardNews from "./DashboardNews";
import DashboardSchedule from "./DashboardSchedule";
import DashboardMessage from "./DashboardMessage";

export default function DashboardMain() {
  return (
    <>
      <main>
        <DashboardNews />
        <DashboardSchedule />
        <DashboardMessage />
      </main>
    </>
  );
}
