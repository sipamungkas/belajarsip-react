import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/activity.css";
import MyClassItem from "../components/MyClassItem";
import NewClassItem from "../components/NewClassItem";
import ActivityTitle from "../components/ActivityTitle";
import Notification from "../components/Notification";
import Backdrop from "../components/Backdrop";
import { BASE_URL } from "../constant";
import axios from "axios";

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      courseList: [],
      newCourseList: [],
    };
  }

  setShowMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };
  setShowNotification = () => {
    this.setState({ showNotification: !this.state.showNotification });
  };

  courseList = [
    {
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 100,
    },
    {
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 88,
    },
    {
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 88,
    },
  ];

  newCourseList = [
    {
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      level: "Beginner",
      price: 0,
    },
    {
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      level: "Beginner",
      price: 0,
    },
    {
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      level: "Beginner",
      price: 0,
    },
  ];

  componentDidMount() {
    axios(`${BASE_URL}courses/my-class?limit=3`, {
      headers: { Authorization: `Bearer ${this.props.user.token}` },
    })
      .then((res) => {
        this.setState({ courseList: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
    axios(`${BASE_URL}courses?limit=3`, {
      headers: { Authorization: `Bearer ${this.props.user.token}` },
    })
      .then((res) => {
        console.log("state", this.state.courseList);
        const availableCourses = res.data.data.filter(
          (course) =>
            !this.state.courseList.filter(
              (registered) => registered.id === course.id
            ).length
        );
        this.setState({
          newCourseList: availableCourses,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { user } = this.props;
    const { showNotification, courseList, newCourseList } = this.state;
    return (
      <>
        <Sidebar
          onShowMessage={() => this.setShowMessage}
          user={user}
          onNotificationClick={() => this.setShowNotification}
        />
        <main className={"activity"}>
          <ActivityTitle title={"Activity"} back={false} />
          <div className="card bg-transparent border-0 p-0">
            <div className="card-header bg-transparent border-0">My Class</div>
            <div className="card-body p-0 mt-0">
              <div className="table-responsive">
                <table className="table table-borderless my-class-table">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">
                        <input type="checkbox" name="" id="" />
                      </th>
                      <th scope="col" className="table-title">
                        Class Name
                      </th>
                      <th scope="col" className="table-category">
                        Category
                      </th>
                      <th
                        scope="col"
                        className="table-description"
                        style={{ maxWidth: "25%" }}
                      >
                        Description
                      </th>
                      <th scope="col">Progress</th>
                      <th scope="col" className="table-status">
                        Status
                      </th>
                      <th scope="col">Score</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseList.map((course, index) => (
                      <MyClassItem key={index} course={course} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Link
                  to={{
                    pathname: "/dashboard/activity/my-class",
                    state: { user },
                  }}
                >
                  <span className="view-all touchable">
                    view all{" "}
                    <img
                      src="/assets/images/icons/forward-icon.svg"
                      width="12"
                      height="12"
                      alt="view all"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="card border-0 p-0 mt-4 mt-md-5 col-12 rounded-10px">
            <div className="card-header bg-transparent border-0 my-2">
              New Class
            </div>
            <div className="card-body mt-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control col-12"
                  placeholder="Quick Search"
                  aria-label="Quick Search"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn bg-primary-blue text-white text-xs"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
              <div className="mt-0 col-12 search-filter mb-3">
                <select name="category" id="category">
                  <option value="">Categories</option>
                </select>
                <select name="level" id="level">
                  <option value="">Level</option>
                </select>
                <select name="pricing" id="pricing">
                  <option value="">Pricing</option>
                </select>
              </div>
              <div className={"table-responsive"}>
                <table
                  className="table table-borderless new-class-table p-2"
                  style={{ borderCollapse: "separate", borderSpacing: "0 5px" }}
                >
                  <thead>
                    <tr>
                      <th scope="col" className="table-title">
                        Class Name
                      </th>
                      <th scope="col" className="table-category">
                        Category
                      </th>
                      <th
                        scope="col"
                        className="table-description"
                        style={{ maxWidth: "25%" }}
                      >
                        Description
                      </th>
                      <th scope="col" className={"table-level"}>
                        Level
                      </th>
                      <th scope="col">Pricing</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {newCourseList.map((course, index) => (
                      <NewClassItem key={index} course={course} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pagination-container d-flex flex-row justify-content-between align-items-center">
                <span className="w-100">Showing 10 out of 64</span>
                <div className="d-flex flex-row justify-content-evenly">
                  <div className="table-page touchable">
                    <img
                      className="rotate-180"
                      src="/assets/images/icons/forward-icon.svg"
                      alt=""
                    />
                  </div>
                  <div className={"page-number "}>
                    <span className="table-page touchable active">1</span>
                    <span className="table-page touchable">2</span>
                    <span className="table-page touchable">3</span>
                    <span className="table-page touchable">4</span>
                    <span className="table-page touchable">5</span>
                  </div>

                  <div className="table-page touchable">
                    <img src="/assets/images/icons/forward-icon.svg" alt="" />
                  </div>
                </div>
              </div>
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
