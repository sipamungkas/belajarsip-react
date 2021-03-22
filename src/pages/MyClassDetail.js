import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActivityTitle from "../components/ActivityTitle";
import Sidebar from "../components/Sidebar";
import MyClassDescription from "../components/MyClassDescription";
import MyClassProgress from "../components/MyClassProgress";

export default class MyClassDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 2,
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
    },
  ];

  renderScore = (course) => {
    console.log(course);
    const { tabIndex } = this.state;
    if (tabIndex === 2) {
      return (
        <div className="your-score">
          <span className={""}>Your Score</span>

          <span className="score">{course.score ?? 0}</span>
        </div>
      );
    }

    return (
      <Link to={"/"} className="badge btn-register">
        Register
      </Link>
    );
  };

  renderTabContent = (course) => {
    const { tabIndex } = this.state;
    if (tabIndex === 2) {
      return <MyClassProgress progressList={course.progressList} />;
    }
    if (tabIndex === 3) {
      return "3";
    }

    return <MyClassDescription courses={course} />;
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

  render() {
    const { params } = this.props.match;
    const { tabIndex } = this.state;
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
                  {this.renderScore(course)}
                </div>
                {this.renderProgressBar(course)}
              </div>
            </div>
            <div className="tab-menu-container">
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
            </div>
            {this.renderTabContent(course)}
          </div>
        </main>
      </>
    );
  }
}
