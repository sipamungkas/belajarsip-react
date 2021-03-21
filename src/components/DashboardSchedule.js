import React from "react";
import "../styles/dashboardSchedule.css";
import "./DashboardScheduleDate";
import DashboardScheduleDate from "./DashboardScheduleDate";
import DashboardScheduleList from "./DashboardScheduleList";
import DashboardNews from "./DashboardNews";

export default function DashboardSchedule() {
  return (
    <div className={"schedule-container"}>
      <DashboardNews />
      <section className={"schedule mt-3"}>
        <div className="card">
          <DashboardScheduleDate />
          <DashboardScheduleList />
        </div>
      </section>
    </div>
  );
}
