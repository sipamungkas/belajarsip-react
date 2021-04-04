import React from "react";
import "../styles/dashboardSchedule.css";
import "./DashboardScheduleDate";
import DashboardScheduleDate from "./DashboardScheduleDate";
import DashboardScheduleList from "./DashboardScheduleList";
import DashboardNews from "./DashboardNews";

export default function DashboardSchedule(props) {
  const { mode } = props;
  return (
    <div
      className={`schedule-container ${
        props.user.mode !== "fasilitator" ? "student" : ""
      }`}
    >
      <DashboardNews />
      <section className={"schedule mt-3"}>
        <div className="card">
          <DashboardScheduleDate user={props.user} />
          <DashboardScheduleList mode={mode} />
        </div>
      </section>
    </div>
  );
}
