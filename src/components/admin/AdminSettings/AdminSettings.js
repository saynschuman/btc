import React from "react";
import "./AdminSettings.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import EditAdmins from "../../admin/AdminSettings/EditAdmins/EditAdmins";
import { connect } from "react-redux";
import { getAdmins } from "../../../actions";
import AdminsLoader from "./AdminsLoader/AdminsLoader";

class AdminSettings extends React.Component {
  componentDidMount() {
    this.props.getAdmins();
  }
  render() {
    return (
      <div className={"admin-body"}>
        <div className="admin-block">
          <div className="settings-header">Администраторы</div>
          <div className="settings-body">
            <PerfectScrollbar>
              {this.props.isLoading && <AdminsLoader />}
              {this.props.isLoaded && (
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

                    {this.props.adminList.map(admin => {
                      return (
                        <EditAdmins
                          key={admin.id}
                          id={admin.id}
                          password={admin.password}
                          rule={admin.rule}
                          email={admin.email}
                        />
                      );
                    })}
                  </tbody>
                </table>
              )}
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
export default connect(
  state => {
    return {
      adminList: state.admins.adminList,
      isLoading: state.admins.isLoading,
      isLoaded: state.admins.isLoaded
    };
  },
  { getAdmins }
)(AdminSettings);
