import React, { useEffect, useState } from "react";
import "../styles/scheduleList.css";
import DashboardScheduleItem from "./DashboardScheduleItem";
import FasilitatorScheduleItem from "./FasilitatorScheduleItem";
import axios from "axios";
import { BASE_URL } from "../constant";

export default function DashboardScheduleList(props) {
  const { mode } = props;
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

  const courseFasilitator = [
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

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}dashboard/instructor/16/2021-03-29`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // React.useEffect(() => {
  //   // side effect hook
  //   // call API with props.greeting parameter
  //   setTranslation(response.data.translation);
  // }, [setTranslation]);
  console.log(mode);
  console.log(data);
  if (mode === "fasilitator") {
    return (
      <section className={"schedule-list"}>
        {data.map((course, index) => (
          <FasilitatorScheduleItem key={index} course={course} />
        ))}
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
