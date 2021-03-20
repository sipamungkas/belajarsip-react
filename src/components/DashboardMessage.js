import React from "react";
import "../styles/dashboardMessage.css";

export default function DashboardMessage(props) {
  return (
    <div className="overlay-bg-black show-overlay">
      <aside className={"message-container card show"}>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h5 className="title">Message</h5>

          <img
            src="/assets/images/icons/circle-plus-icon.svg"
            alt="add message"
            className={"circle-plus touchable"}
          />
        </div>
        <div className="search-box">
          <img
            src="assets/images/icons/search-icon.svg"
            alt="search icon"
            className={"search-icon"}
          />
          <input type="text" placeholder="Search" />
        </div>
      </aside>
    </div>
  );
}
