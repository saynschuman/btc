import React from "react";
import "./CustomCheckbox.scss";

export default props => {
  return (
    <label className="customCheckbox">
      <input type="checkbox" />
      <span className="checkmark" />
    </label>
  );
};
