import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/profile.css";

export default class Activity extends Component {
  constructor() {
    super();
    this.state = {
      showMessage: false,
    };
  }

  render() {
    return (
      <>
        <Sidebar onShowMessage={() => this.setShowMessage} />
        <main className={"profile"}>
          <div className="image-cover-container">
            <img
              src="/assets/images/profile-cover-image.png"
              alt="Profile cover"
              className="image-cover"
            />
            <div className="avatar-container">
              <div>
                <img
                  src="/assets/images/ilustration/avatar.svg"
                  className="avatar-image-lg"
                  alt="Avatar"
                />
                <img
                  src="/assets/images/icons/edit-icon.svg"
                  className="edit-avatar"
                  alt="Edit Icon"
                />
              </div>
              <div className={"avatar-name"}>Emir Kharisma</div>
            </div>
          </div>
          <div className="profile-setting">
            <h1>Profile Setting</h1>
            <div className="setting-list">
              <div className="setting-container touchable">
                <div className="d-flex flex-column w-100">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <img
                        src="/assets/images/icons/phone-icon.svg"
                        alt="Phone Icon"
                        className="setting-icon"
                      />
                      Phone Number
                    </div>
                    <img
                      src="/assets/images/icons/forward-icon.svg"
                      alt="Forward Icon"
                    />
                  </div>
                </div>
              </div>

              <div className="setting-container touchable">
                <div className="d-flex flex-column w-100">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <img
                        src="/assets/images/icons/triple-star-icon.svg"
                        alt="Triple Start Icon"
                        className="setting-icon"
                      />
                      Change Password
                    </div>
                    <img
                      src="/assets/images/icons/forward-icon.svg"
                      alt="Forward Icon"
                    />
                  </div>
                </div>
              </div>

              <div className="setting-container touchable">
                <div className="d-flex flex-column w-100">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <img
                        src="/assets/images/icons/chat-icon.svg"
                        alt="Chat Icon"
                        className="setting-icon"
                      />
                      Chat Settings
                    </div>
                    <img
                      src="/assets/images/icons/forward-icon.svg"
                      alt="Forward Icon"
                    />
                  </div>
                </div>
              </div>

              <div className="setting-container touchable">
                <div className="d-flex flex-column w-100">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <img
                        src="/assets/images/icons/no-notification-icon.svg"
                        alt="No Notifications Icon"
                        className="setting-icon"
                      />
                      Push Notifications
                    </div>
                    <img
                      src="/assets/images/icons/forward-icon.svg"
                      alt="Forward Icon"
                    />
                  </div>
                </div>
              </div>

              <div className="setting-container touchable">
                <div className="d-flex flex-column w-100">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <img
                        src="/assets/images/icons/security-icon.svg"
                        alt="Security Icon"
                        className="setting-icon"
                      />
                      Privacy and Security
                    </div>
                    <img
                      src="/assets/images/icons/forward-icon.svg"
                      alt="Forward Icon"
                    />
                  </div>
                </div>
              </div>

              <div className="setting-container touchable">
                <div className="d-flex flex-column w-100">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <img
                        src="/assets/images/icons/storage-icon.svg"
                        alt="Storage Icon"
                        className="setting-icon"
                      />
                      Data and Storage
                    </div>
                    <img
                      src="/assets/images/icons/forward-icon.svg"
                      alt="Forward Icon"
                    />
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
