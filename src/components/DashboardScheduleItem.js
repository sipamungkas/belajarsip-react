import React from "react";

import PropTypes from "prop-types";

export default function DashboardScheduleItem(props) {
  const { courseTime, courseList } = props;

  return (
    <>
      <div className="schedule-time">
        <span>{courseTime ?? "00:00"}</span>
      </div>
      <div className="course-list">
        {courseList.map((course) => (
          <div className="course-item">
            <img
              src={
                course.categoryIcon ??
                "/assets/images/icons/finance-category.svg"
              }
              alt="software category"
              className={"category-icon"}
            />
            <h3 className="course-title">{course.title ?? "No Title"}</h3>
            <svg
              viewBox="0 0 4 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={"list-icon touchable"}
            >
              <circle
                cx="2"
                cy="15.3335"
                r="2"
                transform="rotate(-90 2 15.3335)"
                fill="#000"
              />
              <circle
                cx="2"
                cy="8.66699"
                r="2"
                transform="rotate(-90 2 8.66699)"
                fill="#000"
              />
              <circle
                cx="2"
                cy="2"
                r="2"
                transform="rotate(-90 2 2)"
                fill="#000"
              />
            </svg>

            <div className="course-duration">
              {course.duration ?? "0 minutes"}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
