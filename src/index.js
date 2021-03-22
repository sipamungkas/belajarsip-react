import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import DashboardFU from "./pages/DashboardFU";
import Activity from "./pages/Activity";
import MyClass from "./pages/MyClass";
import MyClassDetail from "./pages/MyClassDetail";
import ActivityFasilitator from "./pages/ActivityFasilitator";
import MyClassDetailFasilitator from "./pages/MyClassDetailFasilitator";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/reset-password/:id?" exact component={ResetPassword} />
      <Route path="/dashboard/" exact component={Dashboard} />
      <Route path="/dashboard/for-you" exact component={DashboardFU}></Route>
      <Route path="/dashboard/activity" exact component={Activity}></Route>
      <Route
        path="/dashboard/activity/my-class"
        exact
        component={MyClass}
      ></Route>
      <Route
        path="/dashboard/activity/my-class/:id"
        exact
        component={MyClassDetail}
      ></Route>
      <Route
        path="/dashboard/activity-fasilitator"
        exact
        component={ActivityFasilitator}
      ></Route>
      <Route
        path="/dashboard/activity-fasilitator/my-class/:id"
        exact
        component={MyClassDetailFasilitator}
      ></Route>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
