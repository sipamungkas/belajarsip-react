import React from "react";
import "../styles/notification.css";

export default function Notification() {
  return (
    <div className={"notification-container"}>
      <h3>Notification</h3>
      <img
        src="/assets/images/icons/close-icon.svg"
        className={"close-icon"}
        alt=""
      />
      <div className={"notification-body"}>
        <h4>Today</h4>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">2 min</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">2 min</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">2 min</div>
        </div>
        <h4>Yesterday</h4>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">2 min</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">2 min</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">2 min</div>
        </div>
      </div>
    </div>
  );
}
