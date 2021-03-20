import React from "react";
import "../styles/dashboardMain.css";
import DashboardNews from "./DashboardNews";
import DashboardSchedule from "./DashboardSchedule";

export default function DashboardMain() {
  return (
    <>
      <main>
        <DashboardNews />
        <DashboardSchedule />
      </main>
    </>
  );
}
