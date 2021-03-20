import React from "react";
import DateItem from "./DateItem";
import { Link } from "react-router-dom";

export default function DashboardScheduleDate() {
  return (
    <section className={"date"}>
      <div className={"date-header"}>
        <h5 className="title">Today, October 16</h5>
        <img
          src="assets/images/icons/calendar-icon.svg"
          alt="calendar icon"
          className={"calendar-icon touchable"}
        />
      </div>
      <div className="date-body">
        <DateItem dayName={"Mo"} day={"12"} active={"active"} />
        <DateItem dayName={"Tu"} day={"13"} />
        <DateItem dayName={"We"} day={"14"} />
        <DateItem dayName={"Th"} day={"15"} />
        <DateItem dayName={"Fr"} day={"16"} />
        <DateItem dayName={"Sa"} day={"17"} />
        <DateItem dayName={"Su"} day={"18"} />
      </div>
      <Link
        to="dashboard/for-you"
        className="d-flex align-items-center justify-content-center touchable py-3 all-schedule"
      >
        <span className={"first"}>All schedule&nbsp;</span>
        <span className={"last"}>ForYou</span>
      </Link>
    </section>
  );
}
