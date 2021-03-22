import React from "react";
import { Link } from "react-router-dom";

export default function CoverDescription(props) {
  const { course } = props;
  return (
    <>
      <div className="cover">
        <img
          className={"cover-image"}
          src={`/assets/images/${course?.cover ?? "class-detail-cover.png"}`}
          height={100}
          width={100}
          alt="Cover"
        />
      </div>
      <div className="content">
        <div className="category-container bg-primary-blue">
          <img
            src="/assets/images/icons/software-category-icon.svg"
            alt="category icon"
          />
        </div>
        <div className={"course-header-wrapper"}>
          <h2 className="course-title">{course?.title ?? "Untitled"}</h2>
          <div className={"course-misc"}>
            <div className="course-level">
              Level: {course?.level ?? "Beginner"}
            </div>
            <div className="course-category">
              Category: {course?.category ?? "Uncategorized"}
            </div>
            <div className="course-price">
              Price:{" "}
              {course?.price === 0 || course?.price === undefined
                ? "Free"
                : `$${course.price}`}
            </div>
            <Link to={"/"} className="badge btn-register ">
              Register
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
