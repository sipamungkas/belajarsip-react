import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import axios from "axios";

import { BASE_URL } from "../constant";

export default function FasilitatorScheduleItem(props) {
  const { course } = props;
  console.log(course);
  return (
    <div className={"fasilitator-item"}>
      <div className={"course-time"}>{course.time ?? "00.00 - 00.00"}</div>
      <div className={"course-title text-truncate"}>
        {course.title ?? "No Title"}
      </div>
      <div className={"student-count"}>
        {course.student ?? 0}{" "}
        <img
          src={"/assets/images/icons/student-icon.svg"}
          alt={course.title ?? "course title"}
        />
      </div>
    </div>
  );
}

FasilitatorScheduleItem.propTypes = {
  course: PropTypes.object,
};
