import React from "react";
import "./AdminSettings.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import EditAdmins from "../../admin/AdminSettings/EditAdmins/EditAdmins";
import { adminList } from "../../../backend/mocks";

class AdminSettings extends React.Component {
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
                  {adminList.map(admin => {
                    return (
                      <EditAdmins
                        id={admin.id}
                        password={admin.password}
                        rule={admin.rule}
                        email={admin.email}
                      />
                    );
                  })}
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
