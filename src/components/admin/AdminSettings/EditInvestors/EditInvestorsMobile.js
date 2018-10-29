import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";
import CustomSelect from "../../../commmon/CustomSelect/CustomSelect";
import classNames from "classnames";

const rules = [
  { value: "admin", label: "Админ" },
  { value: "moderator", label: "Модератор" },
  { value: "investor", label: "Инвестор" }
];

class EditInvestorsMobile extends React.Component {
  render() {
    return (
      <div className={"settings-table-mobile"}>
        <table className={"settings-table"}>
          <tbody>
            <tr>
              <td>ID</td>
              <td>
                <CustomInput
                  type={"text"}
                  className={classNames("id", {
                    cantEdit: true
                  })}
                  value={this.props.id}
                  disabled={true}
                />
              </td>
            </tr>
            <tr>
              <td>Имя</td>
              <td>
                <CustomInput
                  type={"text"}
                  className={classNames("id", {
                    cantEdit: true
                  })}
                  value={this.props.id}
                  disabled={true}
                />
              </td>
            </tr>
            <tr>
              <td>Фамилия</td>
              <td>
                <CustomInput
                  type={"text"}
                  className={classNames("id", {
                    cantEdit: true
                  })}
                  value={this.props.id}
                  disabled={true}
                />
              </td>
            </tr>
            <tr>
              <td>Статус</td>
              <td>
                <CustomInput
                  type={"text"}
                  className={classNames("id", {
                    cantEdit: true
                  })}
                  value={this.props.id}
                  disabled={true}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="close-button-admin-moblie">Удалить</div>
      </div>
    );
  }
}

export default EditInvestorsMobile;
