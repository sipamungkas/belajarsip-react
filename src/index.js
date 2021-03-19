import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword1 from "./pages/ResetPassword1";
import ResetPassword2 from "./pages/ResetPassword2";
import ResetPassword3 from "./pages/ResetPassword3";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/reset-password" exact component={ResetPassword1} />
      <Route path="/reset-password?s=2" exact component={ResetPassword2} />
      <Route path="/reset-password?s=3" exact component={ResetPassword3} />
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
