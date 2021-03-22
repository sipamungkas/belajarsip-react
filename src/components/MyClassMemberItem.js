import React from "react";

export default function MyClassMemberItem(props) {
  const { member } = props;
  return (
    <div className={"member-container"} onClick={props.onClickHandler}>
      <img
        className={"avatar"}
        src={`/assets/images/avatars/${member.avatar || "avatar-1.png"}`}
        alt="Avatar"
      />
      <div className={"member-name"}>{member.name || "No Name"}</div>
      <div className={""}>
        <img src={"/assets/images/icons/list-icon.svg"} alt={"option"} />
      </div>
    </div>
  );
}
