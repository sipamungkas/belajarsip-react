import React, { useState, useEffect } from "react";
import "../styles/scheduleList.css";
import DashboardScheduleItem from "./DashboardScheduleItem";
import FasilitatorScheduleItem from "./FasilitatorScheduleItem";
import axios from "axios";
import { BASE_URL } from "../constant";

export default function DashboardScheduleList(props) {
  const { mode, tab, user } = props;
  // const courseList = [
  //   {
  //     title: "Introduction to Banking Finance",
  //     duration: "100 minutes",
  //     categoryIcon: "/assets/images/icons/finance-category.svg",
  //   },
  //   {
  //     title: "Trigonometry",
  //     duration: "50 minutes",
  //     categoryIcon: "/assets/images/icons/finance-category.svg",
  //   },
  // ];
  console.log(user, "user token");
  const courseListforYou = [
    {
      title: "Introduction to Banking Finance",
      duration: "100 minutes",
      categoryIcon: "/assets/images/icons/finance-category.svg",
    },
    {
      title: "Introduction to Banking Finance",
      duration: "100 minutes",
      categoryIcon: "/assets/images/icons/finance-category.svg",
    },
  ];

  const [courseList, setcourseList] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}dashboard/2021-03-29`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setcourseList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.token]);

  if (mode === "fasilitator") {
    return (
      <section className={"schedule-list"}>
        {courseList.map((course, index) => (
          <FasilitatorScheduleItem key={index} course={course} />
        ))}
        <div className="add-new-task">
          <button className={"btn btn-add-task create-class"}>
            <img
              src={"/assets/images/icons/circle-plus-icon-white.svg"}
              alt="add"
              className="add-task-icon"
            />
            New Task
          </button>
        </div>
      </section>
    );
  } else if (tab === 2) {
    return (
      <section className={"schedule-list"}>
        <DashboardScheduleItem
          courseTime={"18:00"}
          courseList={courseListforYou}
        />
        <DashboardScheduleItem
          courseTime={"11:00"}
          courseList={courseListforYou}
        />
        <DashboardScheduleItem
          courseTime={"18:00"}
          courseList={courseListforYou}
        />
      </section>
    );
  } else {
    return (
      <section className={"schedule-list"}>
        <DashboardScheduleItem courseTime={"18:00"} courseList={courseList} />
        <DashboardScheduleItem courseTime={"11:00"} courseList={courseList} />
        <DashboardScheduleItem courseTime={"18:00"} courseList={courseList} />
      </section>
    );
  }
}
