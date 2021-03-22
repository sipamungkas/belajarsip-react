import React from "react";
import MyClassMemberItem from "./MyClassMemberItem";

export default function MyClassMember(props) {
  const {
    course: { members },
  } = props;

  const renderMember = () => {
    if (!members || members.length <= 0) {
      return "No member yet";
    }
    return members.map((member, index) => (
      <MyClassMemberItem
        onClickHandler={props.onClickHandler}
        key={index}
        member={member}
      />
    ));
  };
  console.log(members);
  return (
    <div className="card bg-white border-0 p-0 rounded-10px">
      <div className="card-body ">
        <div className="class-description-container class-progress-container">
          <div className="description">{renderMember()}</div>
        </div>
      </div>
    </div>
  );
}
