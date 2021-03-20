import React from "react";
import "../styles/dashboardSchedule.css";
import "./DashboardScheduleDate";
import DashboardScheduleDate from "./DashboardScheduleDate";

export default function DashboardSchedule() {
  return (
    <>
      <section className={"schedule mt-3"}>
        <div className="card">
          <DashboardScheduleDate />
        </div>
      </section>
    </>
  );
}
