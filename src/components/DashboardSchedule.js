import React, { useState } from "react";
import "../styles/dashboardSchedule.css";
import "./DashboardScheduleDate";
import DashboardScheduleDate from "./DashboardScheduleDate";
import DashboardScheduleList from "./DashboardScheduleList";
import DashboardNews from "./DashboardNews";

export default function DashboardSchedule(props) {
  const { mode } = props;
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <div
      className={`schedule-container ${
        props.user.mode !== "fasilitator" ? "student" : ""
      }`}
    >
      <DashboardNews />
      <section className={"schedule mt-3"}>
        <div className="card">
          <DashboardScheduleDate
            user={props.user}
            setTabIndex={setTabIndex}
            tab={tabIndex}
          />
          <DashboardScheduleList mode={mode} tab={tabIndex} />
        </div>
      </section>
    </div>
  );
}
