import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";
import CustomSelect from "../../../commmon/CustomSelect/CustomSelect";

const rules = [
  { value: "admin", label: "Админ" },
  { value: "moderator", label: "Модератор" },
  { value: "investor", label: "Инвестор" }
];

export default props => {
  return (
    <tr>
      <td>
        <CustomInput type={"text"} className={"id"} value={props.id} />
      </td>
      <td>
        <CustomInput
          type={"password"}
          className={"password"}
          value={props.password}
        />
      </td>
      <td>
        <CustomSelect data={rules} value={props.rules} />
      </td>
      <td>
        <CustomInput type={"text"} value={props.email} />
      </td>
      <td>
        <button>Редактировать</button>
      </td>
      <td>
        <div className="close-row" />
      </td>
    </tr>
  );
};
