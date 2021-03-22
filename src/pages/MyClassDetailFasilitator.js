import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActivityTitle from "../components/ActivityTitle";
import Sidebar from "../components/Sidebar";
import MyClassDescription from "../components/MyClassDescription";
import MyClassProgress from "../components/MyClassProgress";
import MyClassMember from "../components/MyClassMember";
import MyClassMemberItem from "../components/MyClassMemberItem";

export default class MyClassDetailFasilitator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 4,
      studentInfo: false,
    };
  }
  courseList = [
    {
      id: 1,
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "90",
      status: "completed",
      score: 88,
      cover: "class-detail-cover.png",
      progressList: [
        {
          title: "HTML Essential Training",
          status: "ongoing",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
      ],
      members: [
        { name: "Deddy Corbuzer", avatar: "avatar-1.png" },
        { name: "Eden Hazard", avatar: "avatar-1.png" },
        { name: "Isyana Sarasvati", avatar: "avatar-1.png" },
        { name: "Nissa Sabyan", avatar: "avatar-1.png" },
        { name: "Peppy", avatar: "avatar-1.png" },
      ],
    },

    {
      id: 2,
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 100,
      cover: "class-detail-cover.png",
      progressList: [
        {
          title: "HTML Essential Training",
          status: "ongoing",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
      ],
      members: [
        { name: "Deddy Corbuzer", avatar: "avatar-1.png" },
        { name: "Eden Hazard", avatar: "avatar-1.png" },
        { name: "Isyana Sarasvati", avatar: "avatar-1.png" },
        { name: "Nissa Sabyan", avatar: "avatar-1.png" },
        { name: "Peppy", avatar: "avatar-1.png" },
      ],
    },

    {
      id: 3,
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 88,
      cover: "class-detail-cover.png",
      progressList: [
        {
          title: "HTML Essential Training",
          status: "ongoing",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
      ],
      members: [
        { name: "Deddy Corbuzer", avatar: "avatar-1.png" },
        { name: "Eden Hazard", avatar: "avatar-1.png" },
        { name: "Isyana Sarasvati", avatar: "avatar-1.png" },
        { name: "Nissa Sabyan", avatar: "avatar-1.png" },
        { name: "Peppy" },
      ],
    },
  ];

  renderTabContent = (course) => {
    const { tabIndex } = this.state;
    if (tabIndex === 2) {
      return <MyClassProgress progressList={course.progressList} />;
    }
    if (tabIndex === 3) {
      return "3";
    }
    if (tabIndex === 4) {
      //   return "4";
      return (
        <MyClassMember
          course={course}
          onClickHandler={() => this.showStudentInfo()}
        />
      );
    }

    return <MyClassDescription course={course} />;
  };

  renderProgressBar = (course) => {
    const { tabIndex } = this.state;
    if (tabIndex === 2) {
      return (
        <div class="horizontal-progress-container flex-grow-1 mb-4 mb-md-4">
          <span>{course.progress || "0"}% to complete</span>
          <div class="horizontal-background" style={{ width: "100%" }}>
            <span
              class="horizontal-progress"
              style={{ width: `${course.progress}%` }}
            ></span>
          </div>
        </div>
      );
    }
    return "";
  };

  changeTabHandler = (tabIndex) => {
    this.setState({ tabIndex });
  };

  showStudentInfo = () => {
    this.setState({ studentInfo: !this.state.studentInfo });
  };

  render() {
    const { params } = this.props.match;
    const { tabIndex, studentInfo } = this.state;
    const course = this.courseList.find(
      (data) => data.id === parseInt(params.id)
    );
    return (
      <>
        <Sidebar onShowMessage={() => this.setShowMessage} />
        <main className="activity">
          <ActivityTitle
            title={course?.title ?? "Course Not Found"}
            back={true}
          />
          <div className="card bg-white border-0 p-0 rounded-10px">
            <div className="cover">
              <img
                className={"cover-image"}
                src={`/assets/images/${
                  course?.cover ?? "class-detail-cover.png"
                }`}
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
                </div>
                {this.renderProgressBar(course)}
              </div>
            </div>
            <div className="tab-menu-container fasilitator">
              <div
                className={`tab-menu touchable ${
                  tabIndex === 1 ? "active" : ""
                }`}
                onClick={() => this.changeTabHandler(1)}
              >
                Information
              </div>
              <div
                className={`tab-menu touchable ${
                  tabIndex === 2 ? "active" : ""
                }`}
                onClick={() => this.changeTabHandler(2)}
              >
                Class Progress
              </div>
              <div
                className={`tab-menu touchable ${
                  tabIndex === 3 ? "active" : ""
                }`}
                onClick={() => this.changeTabHandler(3)}
              >
                Class Discussion
              </div>
              <div
                className={`tab-menu touchable ${
                  tabIndex === 4 ? "active" : ""
                }`}
                onClick={() => this.changeTabHandler(4)}
              >
                Member
              </div>
            </div>
            {this.renderTabContent(course)}
          </div>
          <div className={`big-overlay ${studentInfo ? "show" : ""}`}>
            <div className={"member-pop-up"}>
              <img
                onClick={() => this.showStudentInfo()}
                className={"close-icon"}
                src="/assets/images/icons/close-icon.svg"
                alt="close"
              />
              <div className={"member-container"}>
                <img
                  className={"avatar"}
                  src={`/assets/images/avatars/${
                    course.members[0].avatar || "avatar-1.png"
                  }`}
                  alt="Avatar"
                />
                <div className={"member-name"}>
                  {course.members[0].name || "No Name"}
                </div>
              </div>
              <hr />
              <table className="table table-borderless my-class-table">
                <thead>
                  <tr>
                    <th scope="col" className="table-title"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className={course.score === 100 ? "perfect" : ""}
                    onClick={() => console.log("click")}
                  >
                    <td className="table-title td-truncate">
                      {course.title ?? "Untitled"}
                    </td>
                    <td className={"score"}>88</td>
                  </tr>
                  <tr
                    className={course.score === 100 ? "perfect" : ""}
                    onClick={() => console.log("click")}
                  >
                    <td className="table-title td-truncate">
                      {course.title ?? "Untitled"}
                    </td>
                    <td className={"score"}>88</td>
                  </tr>
                  <tr
                    className={course.score === 100 ? "perfect" : ""}
                    onClick={() => console.log("click")}
                  >
                    <td className="table-title td-truncate">
                      {course.title ?? "Untitled"}
                    </td>
                    <td className={"score"}>88</td>
                  </tr>
                  <tr
                    className={course.score === 100 ? "perfect" : ""}
                    onClick={() => console.log("click")}
                  >
                    <td className="table-title td-truncate">
                      {course.title ?? "Untitled"}
                    </td>
                    <td className={"score"}>88</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </>
    );
  }
}
