import React from "react";
import PropTypes from "prop-types";

export default function MessageItem(props) {
  const { sender, timestamp, content, avatar } = props;
  return (
    <div className="message">
      <img
        src={avatar ?? "/assets/images/avatars/avatar-1.png"}
        alt="Nisa Sabyan"
      />
      <div className="message-body">
        <div className="sender-name text-truncate">
          <span>{sender ?? "empty name"}</span>
        </div>
        <div className="message-content text-truncate">
          {content ?? "no content"}
        </div>

        <div className="message-timestamp text-truncate">
          {timestamp ?? "00.00 am"}
        </div>
      </div>
    </div>
  );
}

MessageItem.propTypes = {
  sender: PropTypes.string,
  timestamp: PropTypes.string,
  content: PropTypes.string,
  avatar: PropTypes.string,
};
