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
import DashboardActivity from "./pages/DashboardActivity";
import MyClass from "./pages/MyClass";
import MyClassDetail from "./pages/MyClassDetail";
import ActivityFasilitator from "./pages/ActivityFasilitator";
import MyClassDetailFasilitator from "./pages/MyClassDetailFasilitator";
import Profile from "./pages/Profile";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/reset-password/:id?" exact component={ResetPassword} />
      <Route path="/dashboard/" exact component={Dashboard} />
      <Route
        path="/dashboard/activity"
        exact
        component={DashboardActivity}
      ></Route>
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
      <Route path="/dashboard/profile" exact component={Profile}></Route>
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
