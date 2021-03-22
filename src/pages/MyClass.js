import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default class MyClass extends Component {
  constructor() {
    super();
    this.state = {
      showMessage: false,
    };
  }

  setShowMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };
  render() {
    return (
      <>
        <Sidebar onShowMessage={() => this.setShowMessage} />
        <main className="activity">
          <h1 className="d-flex align-items-center">
            <Link to="/dashboard/activity">
              <img
                className="rotate-180"
                src="/assets/images/icons/forward-icon.svg"
                alt="prev page"
              />
            </Link>
            My Class
          </h1>
          <div className="card bg-transparent border-0 p-0">
            <div className="card-header bg-transparent border-0 col-12 col-md-12 col-lg-12 p-0 my-4 my-md-4 my-lg-2 ">
              <div className="d-flex flex-row justify-content-between row">
                <div className="d-flex flex-row justify-content-between col-10 col-md-8">
                  <input
                    type="text"
                    className="form-control rounded-5px"
                    placeholder="Quick Search"
                    aria-label="Quick Search"
                  />
                  <button className="btn btn-primary-color text-xs mx-2">
                    Search
                  </button>
                </div>
                <div className="col-12 col-md-4">
                  <div className="sort-by-container float-start float-md-end float-lg-end my-2 my-md-0 my-lg-0 rounded-5px px-3">
                    <span className="sort-by-text border-0 w-100">
                      sort by:
                    </span>
                    <select className="border-0 bg-transparent" name="" id="">
                      <option value="">All Categories</option>
                      <option value="">Price</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body p-0 mt-4">
              <table className="table table-borderless my-class-table">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th scope="col">Class Name</th>
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
                  <tr className="perfect">
                    <th scope=" row">
                      <input type="checkbox" name="" id="" defaultChecked />
                    </th>
                    <td>Algebra</td>
                    <td className="table-category">Math</td>
                    <td className="td-truncate table-description">
                      Branch of mathematics dealing with any calculation
                    </td>
                    <td>
                      <div className="single-chart">
                        <svg
                          viewBox="0 0 36 36"
                          className="circular-chart blue m-0"
                        >
                          <path
                            className="circle-bg"
                            d="M18 2.0845
                                                    a 15.9155 15.9155 0 0 1 0 31.831
                                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="circle"
                            strokeDasharray="80, 100"
                            d="M18 2.0845
                                                    a 15.9155 15.9155 0 0 1 0 31.831
                                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <text x="18" y="20.35" className="percentage">
                            80%
                          </text>
                        </svg>
                      </div>
                    </td>
                    <td className="table-status">
                      <span className="badge badge-ongoing p-2 rounded-15px">
                        Ongoing
                      </span>
                    </td>
                    <td>
                      <span
                        className="score"
                        style={{ color: "rgba(43, 231, 208, 1)" }}
                      >
                        100
                      </span>
                    </td>
                    <td>
                      <img
                        src="assets/images/icons/list-icon.svg"
                        className="touchable"
                        alt=""
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
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
