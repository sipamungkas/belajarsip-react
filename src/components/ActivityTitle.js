import React from "react";
import { Link } from "react-router-dom";

export default function ActivityTitle(props) {
  return (
    <h1 className="d-flex align-items-center">
      {props.back ? (
        <Link
          to="/dashboard/activity"
          className={"d-flex align-items-center justify-content-center"}
        >
          <img
            className="dashboard-arrow-home"
            src="/assets/images/icons/forward-icon.svg"
            alt="prev page"
          />
        </Link>
      ) : (
        ""
      )}

      {props.title}
    </h1>
  );
}
