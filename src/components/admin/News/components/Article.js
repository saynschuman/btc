import React from "react";
import CustomCheckbox from "../../../commmon/CustomCheckbox/CustomCheckbox";

export default props => (
  <div className="news-item">
    <div
      className={"news-image"}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={"news-buttons"}>
        <div className={"new-title"}>{props.title}</div>
        <div className={"news-edit"}>
          <div className="icon" />
        </div>
        <div className={"news-delete"}>
          <div className="icon" />
        </div>
      </div>
    </div>
    <div className={"news-toggle"}>
      <CustomCheckbox />
    </div>
  </div>
);
