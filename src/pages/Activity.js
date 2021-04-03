import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/activity.css";
import MyClassItem from "../components/MyClassItem";
import NewClassItem from "../components/NewClassItem";
import ActivityTitle from "../components/ActivityTitle";
import axios from "axios";
import { BASE_URL } from "../constant";

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      myClass: [],
      newClass: [],
      searchValue: "",
      sort: "",
    };
  }

  setShowMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
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
    axios
      .get(`${BASE_URL}my-class/1?limit=3`)
      .then((res) => {
        this.setState({ myClass: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `${BASE_URL}courses?search=${this.state.searchValue}&sort=level-az`,
        {
          headers: {
            user_id: 1,
          },
        }
      )
      .then((res) => {
        this.setState({ newClass: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  searchHandler = () => {
    axios
      .get(
        `${BASE_URL}courses?search=${this.state.searchValue}&sort=${this.state.sort}`,
        {
          headers: {
            user_id: 1,
          },
        }
      )
      .then((res) => {
        this.setState({ newClass: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.searchValue);
    const { user } = this.props;
    const { myClass, newClass } = this.state;
    return (
      <>
        <Sidebar onShowMessage={() => this.setShowMessage} user={user} />
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
                    {myClass.map((course, index) => (
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
                  onChange={(e) =>
                    this.setState({ searchValue: e.target.value })
                  }
                />
                <button
                  className="btn bg-primary-blue text-white text-xs"
                  type="button"
                  id="button-addon2"
                  onClick={() => this.searchHandler()}
                >
                  Search
                </button>
              </div>
              <div className="mt-0 col-12 search-filter mb-3">
                <select
                  name="category"
                  id="category"
                  onChange={(e) => {
                    this.setState({ sort: e.target.value });
                  }}
                >
                  <option value="">Categories</option>
                  <option value="category-az">Category A-Z</option>
                  <option value="category-za">Category Z-A</option>
                </select>
                <select
                  name="level"
                  id="level"
                  onChange={(e) => {
                    this.setState({ sort: e.target.value });
                  }}
                >
                  <option value="">Level</option>
                  <option value="level-az">Lowest Level</option>
                  <option value="level-za">Highest Level</option>
                </select>
                <select
                  name="pricing"
                  id="pricing"
                  onChange={(e) => {
                    this.setState({ sort: e.target.value });
                  }}
                >
                  <option value="">Pricing</option>
                  <option value="price-az">Lowest Price</option>
                  <option value="price-za">Highest Price</option>
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
                    {newClass.map((course, index) => (
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
      </>
    );
  }
}
