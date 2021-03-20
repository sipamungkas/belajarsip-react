import React from "react";
import "../styles/dashboardSchedule.css";
import "./DashboardScheduleDate";
import DashboardScheduleDate from "./DashboardScheduleDate";
import DashboardScheduleList from "./DashboardScheduleList";

export default function DashboardSchedule() {
  return (
    <>
      <section className={"schedule mt-3"}>
        <div className="card">
          <DashboardScheduleDate />
          <DashboardScheduleList />
        </div>
      </section>
    </>
  );
}
