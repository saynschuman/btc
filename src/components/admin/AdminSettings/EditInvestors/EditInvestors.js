import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";
import classNames from "classnames";

class EditInvestors extends React.Component {
  render() {
    return (
      <tr>
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
        <td>
          <div className="close-button-admin" />
        </td>
      </tr>
    );
  }
}

export default EditInvestors;
