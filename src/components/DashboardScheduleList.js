import React from "react";
import "../styles/scheduleList.css";
import DashboardScheduleItem from "./DashboardScheduleItem";
export default function DashboardScheduleList() {
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
  return (
    <section className={"schedule-list"}>
      <DashboardScheduleItem courseTime={"18:00"} courseList={courseList} />
      <DashboardScheduleItem courseTime={"11:00"} courseList={courseList} />
      <DashboardScheduleItem courseTime={"18:00"} courseList={courseList} />
    </section>
  );
}
