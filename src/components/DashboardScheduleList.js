import React, { useState, useEffect } from "react";
import "../styles/scheduleList.css";
import DashboardScheduleItem from "./DashboardScheduleItem";
import FasilitatorScheduleItem from "./FasilitatorScheduleItem";
import axios from "axios";
import { BASE_URL } from "../constant";

export default function DashboardScheduleList(props) {
  const { mode, tab, user } = props;
  const courseList = [
    {
      title: "Introduction to Banking Finance",
      duration: "100 minutes",
      categoryIcon: "/assets/images/icons/finance-category.svg",
    },
    {
      title: "Trigonometry",
      duration: "50 minutes",
      categoryIcon: "/assets/images/icons/finance-category.svg",
    },
  ];

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

  const courseFasilitator2 = [
    {
      title: "Front End Fundamental JavaScript",
      time: "08.00-09.40",
      student: 24,
    },
    {
      title: "Front End Fundamental JavaScript",
      time: "08.00-09.40",
      student: 24,
    },
    {
      title: "Front End Fundamental JavaScript",
      time: "08.00-09.40",
      student: 24,
    },
    {
      title: "Front End Fundamental JavaScript",
      time: "08.00-09.40",
      student: 24,
    },
  ];

  const [courseFasilitator, setCourseFasilitator] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}dashboard/2021-03-29`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setCourseFasilitator(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.token]);

  if (mode === "fasilitator") {
    return (
      <section className={"schedule-list"}>
        {courseFasilitator.map((course, index) => (
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
