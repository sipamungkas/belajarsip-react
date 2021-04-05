import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/activityFasilitator.css";
import MyClassFasilitatorItem from "../components/MyClassFasilitatorItem";
import ActivityTitle from "../components/ActivityTitle";
import Notification from "../components/Notification";
import Backdrop from "../components/Backdrop";

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
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
      schedule: "Friday, 08:00 - 09:40",
      students: 100,
    },
    {
      title: "HTML for Beginners",
      category: "Software",
      description: "HTML from scratch",
      schedule: "Friday, 08:00 - 09:40",
      students: 100,
    },
    {
      title: "History of Europe",
      category: "History",
      description: "The history of Europe concerns itself...",
      schedule: "Friday, 08:00 - 09:40",
      students: 100,
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

  render() {
    const { user } = this.props;
    const { showNotification } = this.state;
    console.table(this.props, "props activity fasilitator");
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
                <table className="table table-borderless my-class-table fasilitator">
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
                      <th scope="col">Schedule</th>
                      <th scope="col">Students</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.courseList.map((course, index) => (
                      <MyClassFasilitatorItem
                        key={index}
                        course={course}
                        onClickHandler={() =>
                          this.props.history.push({
                            pathname:
                              "/dashboard/activity-fasilitator/my-class/1",
                            state: { user },
                          })
                        }
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                {/* <Link to="/dashboard/activity/my-class"> */}
                <span className="view-all touchable">
                  view all{" "}
                  <img
                    src="/assets/images/icons/forward-icon.svg"
                    width="12"
                    height="12"
                    alt="view all"
                  />
                </span>
                {/* </Link> */}
              </div>
            </div>
          </div>

          <div className="card bg-transparent border-0 p-0">
            <div className="card-header bg-transparent border-0">
              Create New Class
            </div>
            <div className="card-body bg-white p-0 mt-0">
              <div className="form-activity ">
                <div className="row">
                  <div className={"form-side col-12 col-lg-5"}>
                    <div className="form-row">
                      Class Name :{" "}
                      <input
                        type="text"
                        className={"activity-input w-50"}
                        placeholder={"Your class name"}
                      />
                    </div>

                    <div className="form-row">
                      Category :{" "}
                      <select name="" id="">
                        <option value="software">software</option>
                        <option value="software">history</option>
                      </select>
                    </div>
                  </div>
                  <div className={"form-side col-12 col-lg-7"}>
                    <div className={"form-row"}>
                      Pricing :{" "}
                      <div className="form-check form-check-inline mx-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="0"
                          defaultChecked
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Free
                        </label>
                      </div>
                      <div className="form-check form-check-inline mx-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="Paid"
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Paid
                        </label>
                      </div>
                    </div>
                    <div className="d-flex form-row">
                      Schedule :{" "}
                      <select name="" id="">
                        <option value="mo">Monday</option>
                        <option value="fr">Friday</option>
                      </select>
                      <div className={"form-row w-50 mx-2"}>
                        <input
                          type="text"
                          className={"activity-input w-25"}
                          placeholder={"00:00"}
                        />
                        <input
                          type="text"
                          className={"activity-input w-25"}
                          placeholder={"00:00"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                Description:
                <textarea
                  className={"activity-text-area"}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <div className="button-create-class">
                  <button className={"btn btn-register my-1 create-class"}>
                    Create
                  </button>
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
