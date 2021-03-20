import React from "react";
import "../styles/dashboardMain.css";
import DashboardNews from "./DashboardNews";
import DashboardSchedule from "./DashboardSchedule";
import DashboardMessage from "./DashboardMessage";

export default function DashboardMain(props) {
  const { showMessage, onShowMessage } = props;
  return (
    <>
      <main>
        <DashboardNews />
        <DashboardSchedule />
        <DashboardMessage
          showMessage={showMessage}
          onShowMessage={onShowMessage}
        />
      </main>
    </>
  );
}
