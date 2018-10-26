import React from "react";
import "./AdminSettings.scss";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class AdminSettings extends React.Component {
  state = {
    selectedOption: null,
    password: "",
    email: "",
    id: ""
  };
  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };
  handleChangeOption = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    return (
      <div className={"admin-body"}>
        <div className="admin-block">
          <div className="settings-header">Администраторы</div>
          <div className="settings-body">
            <table className={"settings-table"}>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Пароль</th>
                  <th>Права</th>
                  <th>E-mail</th>
                  <th>Действие</th>
                  <th />
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      onChange={e => this.handleChange(e, "id")}
                      value={this.state.id}
                    />
                  </td>
                  <td>
                    <input
                      type="password"
                      onChange={e => this.handleChange(e, "password")}
                      value={this.state.password}
                    />
                  </td>
                  <td>
                    <Select
                      className={"rules"}
                      value={this.state.selectedOption}
                      onChange={this.handleChangeOption}
                      options={options}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={e => this.handleChange(e, "email")}
                    />
                  </td>
                  <td>
                    <button>Редактировать</button>
                  </td>
                  <td>
                    <div className="close-row" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="settings-footer">footer</div>
        </div>
      </div>
    );
  }
}
export default AdminSettings;
