import React from "react";
import "./AdminReports.scss";
import classNames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import InvestorReport from "./InvestorReport/InvestorReport";
import { connect } from "react-redux";
import { getInvestorsReport } from "../../../actions";
import ReportsLoader from "../AdminReports/ReportsLoader/ReportsLoader";
import AdminsLoader from "../AdminSettings/AdminsLoader/AdminsLoader";
import InvestorReportMobile from "./InvestorReportMobile/InvestorReportMobile";

class AdminReports extends React.Component {
  componentDidMount() {
    this.props.getInvestorsReport();
  }
  state = {
    investors: true,
    investitions: false
  };
  handleTabs = () => {
    this.setState({
      investors: !this.state.investors,
      investitions: !this.state.investitions
    });
  };
  render() {
    return (
      <div className="admin-body">
        <div className="clearfix">
          <div className="col col-50 left">
            <div className={"admin-block"}>
              <div className="block-header">
                <div className="header-title title-report">
                  Количество зарегистрированных инвесторов в проекте
                </div>
              </div>
              <p className="block-body">22431234</p>
            </div>
          </div>
          <div className="col col-50 right">
            <div className={"admin-block"}>
              <div className="block-header">
                <div className="header-title title-report">
                  Сумма инвестиций в проекте
                </div>
              </div>
              <p className="block-body">22431234</p>
            </div>
          </div>
        </div>
        <div className={"admin-block"}>
          <div className="nav-tabs">
            <ul>
              <li
                onClick={this.handleTabs}
                className={classNames({
                  "not-active": !this.state.investors
                })}
              >
                Отчеты по инвесторам
              </li>
              <li
                onClick={this.handleTabs}
                className={classNames({
                  "not-active": !this.state.investitions
                })}
              >
                Отчеты по инвестициям
              </li>
            </ul>
          </div>
          <div className="search">
            <input
              className={"search-reports"}
              type="text"
              placeholder={"Введите данные"}
            />
          </div>
          <div className="table-reports">
            <div className="settings-body settings-body-desktop">
              <PerfectScrollbar className={"edit-admins-desktop"}>
                <table className={"settings-table reports-table"}>
                  <tbody>
                    <tr>
                      <th>ID инвестора</th>
                      <th>Имя</th>
                      <th>Фамилия</th>
                      <th>Общая мощность инвестора в данный момент (TH/s)</th>
                      <th>Выплачено всего</th>
                      <th>Телефон</th>
                      <th>E-mail</th>
                      <th>История мощности</th>
                    </tr>
                    {this.props.isLoading && <ReportsLoader />}
                    {this.props.isLoaded &&
                      this.props.investorsReports.map(report => {
                        return (
                          <InvestorReport
                            key={report.id}
                            id={report.id}
                            name={report.name}
                            surName={report.surName}
                            power={report.power}
                            payed={report.payed}
                            phone={report.phone}
                            email={report.email}
                          />
                        );
                      })}
                  </tbody>
                </table>
              </PerfectScrollbar>
            </div>
            <div className="settings-body settings-body-mobile">
              <PerfectScrollbar className={"edit-admins-mobile"}>
                {this.props.isLoading && <AdminsLoader />}
                {this.props.isLoaded &&
                  this.props.investorsReports.map(report => {
                    return (
                      <InvestorReportMobile
                        key={report.id}
                        id={report.id}
                        name={report.name}
                        surName={report.surName}
                        power={report.power}
                        payed={report.payed}
                        phone={report.phone}
                        email={report.email}
                      />
                    );
                  })}
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      investorsReports: state.reports.investorsReports,
      isLoading: state.reports.isLoading,
      isLoaded: state.reports.isLoaded
    };
  },
  { getInvestorsReport }
)(AdminReports);
