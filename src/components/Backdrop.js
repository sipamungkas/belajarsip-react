import React from "react";
import "../styles/backdrop.css";
import { useRouteMatch } from "react-router-dom";

export default function Backdrop() {
  const isDashboard = useRouteMatch("/dashboard").isExact;
  console.log(isDashboard, "isdashboard");
  return <div className={`backdrop`}></div>;
}
