import React, { Component } from "react";
import ActivityTitle from "../components/ActivityTitle";
import Sidebar from "../components/Sidebar";
import MyClassDescription from "../components/MyClassDescription";
import { Link } from "react-router-dom";

export default class MyClassDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 1,
    };
  }
  courseList = [
    {
      id: 1,
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 88,
    },

    {
      id: 2,
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 100,
    },

    {
      id: 3,
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 88,
    },
  ];

  renderTabContent = () => {
    const { tabIndex } = this.state;
    if (tabIndex === 2) {
      return "2";
    }
    if (tabIndex === 3) {
      return "3";
    }
    return <MyClassDescription />;
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
                src="/assets/images/class-detail-cover.png"
                height={100}
                width={100}
                alt=""
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
                    {course?.price === 0 || course.price === undefined
                      ? "Free"
                      : `$${course.price}`}
                  </div>
                  <Link to={"/"} className="badge btn-register ">
                    Register
                  </Link>{" "}
                </div>
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
            {this.renderTabContent()}
          </div>
        </main>
      </>
    );
  }
}
