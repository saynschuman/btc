import React from "react";
import "./AdminSettings.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import CustomSelect from "../../commmon/CustomSelect/CustomSelect";

const options1 = [
  { value: "admin", label: "Админ" },
  { value: "moderator", label: "Модератор" },
  { value: "investor", label: "Инвестор" }
];

class AdminSettings extends React.Component {
  state = {
    password: "1234567890",
    email: "watson@gmail.com",
    id: "412412532"
  };
  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };
  render() {
    return (
      <div className={"admin-body"}>
        <div className="admin-block">
          <div className="settings-header">Администраторы</div>
          <div className="settings-body">
            <PerfectScrollbar>
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
                        className={"id"}
                        type="text"
                        onChange={e => this.handleChange(e, "id")}
                        value={this.state.id}
                      />
                    </td>
                    <td>
                      <input
                        type="password"
                        className={"password"}
                        onChange={e => this.handleChange(e, "password")}
                        value={this.state.password}
                      />
                    </td>
                    <td>
                      <CustomSelect data={options1} />
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
                  <tr>
                    <td>
                      <input
                        className={"id"}
                        type="text"
                        onChange={e => this.handleChange(e, "id")}
                        value={this.state.id}
                      />
                    </td>
                    <td>
                      <input
                        type="password"
                        className={"password"}
                        onChange={e => this.handleChange(e, "password")}
                        value={this.state.password}
                      />
                    </td>
                    <td>
                      <CustomSelect data={options1} />
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
                  <tr>
                    <td>
                      <input
                        className={"id"}
                        type="text"
                        onChange={e => this.handleChange(e, "id")}
                        value={this.state.id}
                      />
                    </td>
                    <td>
                      <input
                        type="password"
                        className={"password"}
                        onChange={e => this.handleChange(e, "password")}
                        value={this.state.password}
                      />
                    </td>
                    <td>
                      <CustomSelect data={options1} />
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
                  <tr>
                    <td>
                      <input
                        className={"id"}
                        type="text"
                        onChange={e => this.handleChange(e, "id")}
                        value={this.state.id}
                      />
                    </td>
                    <td>
                      <input
                        type="password"
                        className={"password"}
                        onChange={e => this.handleChange(e, "password")}
                        value={this.state.password}
                      />
                    </td>
                    <td>
                      <CustomSelect data={options1} />
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
                  <tr>
                    <td>
                      <input
                        className={"id"}
                        type="text"
                        onChange={e => this.handleChange(e, "id")}
                        value={this.state.id}
                      />
                    </td>
                    <td>
                      <input
                        type="password"
                        className={"password"}
                        onChange={e => this.handleChange(e, "password")}
                        value={this.state.password}
                      />
                    </td>
                    <td>
                      <CustomSelect data={options1} />
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
                  <tr>
                    <td>
                      <input
                        className={"id"}
                        type="text"
                        onChange={e => this.handleChange(e, "id")}
                        value={this.state.id}
                      />
                    </td>
                    <td>
                      <input
                        type="password"
                        className={"password"}
                        onChange={e => this.handleChange(e, "password")}
                        value={this.state.password}
                      />
                    </td>
                    <td>
                      <CustomSelect data={options1} />
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
            </PerfectScrollbar>
          </div>
          <div className="settings-footer">
            <button className={"settings-save"}>Сохранить</button>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminSettings;
