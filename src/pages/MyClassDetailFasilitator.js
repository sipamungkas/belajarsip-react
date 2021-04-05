import React, { Component } from "react";
import ActivityTitle from "../components/ActivityTitle";
import Sidebar from "../components/Sidebar";
import MyClassDescription from "../components/MyClassDescription";
import MyClassProgress from "../components/MyClassProgress";
import MyClassMember from "../components/MyClassMember";
import Notification from "../components/Notification";
import Backdrop from "../components/Backdrop";
import { BASE_URL } from "../constant";
import axios from "axios";

export default class MyClassDetailFasilitator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 4,
      studentInfo: false,
      showNotification: false,
      course: {},
      students: [],
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
          students={this.state.students}
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
        <div className="horizontal-progress-container flex-grow-1 mb-4 mb-md-4">
          <span>{course.progress || "0"}% to complete</span>
          <div className="horizontal-background" style={{ width: "100%" }}>
            <span
              className="horizontal-progress"
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

  componentDidMount() {
    const { params } = this.props.match;
    const { user } = this.props.location.state;
    axios
      .get(`${BASE_URL}courses/${params.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        this.setState({ course: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${BASE_URL}courses/${params.id}/students`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        this.setState({ students: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // const { params } = this.props.match;
    const { course, tabIndex, studentInfo, showNotification } = this.state;
    const { user } = this.props.location.state;
    // const course = this.courseList.find(
    //   (data) => data.id === parseInt(params.id)
    // );

    console.log(
      "\nCourse from state\n-------------------------",
      this.state.students
    );
    return (
      <>
        <Sidebar
          onShowMessage={() => this.setShowMessage}
          user={user}
          onNotificationClick={() => this.setShowNotification}
        />
        <main className="activity">
          <ActivityTitle
            title={course?.name ?? "Course Not Found"}
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
                <h2 className="course-title">{course?.name ?? "Untitled"}</h2>
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => this.showStudentInfo()}
                className={"close-icon"}
              >
                <path
                  d="M11.9573 9.99914L17.9246 4.04571C18.1859 3.7844 18.3327 3.42997 18.3327 3.06042C18.3327 2.69086 18.1859 2.33643 17.9246 2.07512C17.6632 1.8138 17.3088 1.66699 16.9393 1.66699C16.5697 1.66699 16.2153 1.8138 15.954 2.07512L10.0005 8.04242L4.04711 2.07512C3.78579 1.8138 3.43137 1.66699 3.06181 1.66699C2.69225 1.66699 2.33783 1.8138 2.07651 2.07512C1.81519 2.33643 1.66838 2.69086 1.66838 3.06042C1.66838 3.42997 1.81519 3.7844 2.07651 4.04571L8.04381 9.99914L2.07651 15.9526C1.94644 16.0816 1.8432 16.2351 1.77274 16.4042C1.70229 16.5733 1.66602 16.7547 1.66602 16.9379C1.66602 17.1211 1.70229 17.3025 1.77274 17.4716C1.8432 17.6407 1.94644 17.7942 2.07651 17.9232C2.20552 18.0532 2.359 18.1565 2.52811 18.2269C2.69722 18.2974 2.87861 18.3337 3.06181 18.3337C3.24501 18.3337 3.42639 18.2974 3.5955 18.2269C3.76461 18.1565 3.9181 18.0532 4.04711 17.9232L10.0005 11.9559L15.954 17.9232C16.083 18.0532 16.2365 18.1565 16.4056 18.2269C16.5747 18.2974 16.7561 18.3337 16.9393 18.3337C17.1225 18.3337 17.3038 18.2974 17.473 18.2269C17.6421 18.1565 17.7955 18.0532 17.9246 17.9232C18.0546 17.7942 18.1579 17.6407 18.2283 17.4716C18.2988 17.3025 18.3351 17.1211 18.3351 16.9379C18.3351 16.7547 18.2988 16.5733 18.2283 16.4042C18.1579 16.2351 18.0546 16.0816 17.9246 15.9526L11.9573 9.99914Z"
                  fill="#7A7A7A"
                />
              </svg>
              {/* <div className={"member-container"}>
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
               */}
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
        {showNotification && (
          <Notification onNotificationClick={() => this.setShowNotification} />
        )}
        {showNotification && <Backdrop />}
      </>
    );
  }
}
