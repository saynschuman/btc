import React from "react";
import "./AdminSchema.scss";
import InvestPeriod from "./components/InvestPeriod";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { getInvestPeriod } from "../../../actions";

class AdminSchema extends React.Component {
  componentDidMount() {
    this.props.getInvestPeriod();
  }
  render() {
    return (
      <div className={"admin-body schema-page"}>
        <div className="col col-50 left">
          <div className={"admin-block"}>
            <div className="block-header">
              <div className="header-title title-report title-edit">
                Настройка для расчета покупки/продажи
              </div>
            </div>
            <div className="settings-body">
              <div className="body-title">Стоимость единицы мощности:</div>
              <ul className={"edit-power"}>
                <li>1 TH/s =</li>
                <li>
                  <input type="text" className="bordered-input" />
                </li>
                <li>BTC</li>
              </ul>
            </div>
            <div className="settings-footer">
              <div className="buttons-block">
                <button className={"violet-button"}>Сохранить</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-50 right">
          <div className={"admin-block"}>
            <div className="block-header">
              <div className="header-title title-report title-money">
                Периоды инвестиций и коэфиценты начислений
              </div>
            </div>
            <div className="settings-body">
              <PerfectScrollbar className={"no-ver-scrl"}>
                <table className="settings-table">
                  <tbody>
                    <tr>
                      <th>№</th>
                      <th>Кол-во месяцев</th>
                      <th>Коэфицент начисления</th>
                      <th />
                    </tr>
                    {this.props.investPeriod.map((period, index) => (
                      <InvestPeriod
                        key={index}
                        quantity={period.monthQuantity}
                        koef={period.koef}
                      />
                    ))}
                  </tbody>
                </table>
              </PerfectScrollbar>
            </div>
            <div className="settings-footer">
              <div className="buttons-block">
                <button className={"blue-button"}>Добавить вклад</button>
                <button className={"violet-button"}>Сохранить</button>
              </div>
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
      investPeriod: state.reports.investPeriod,
      isLoading: state.reports.investPeriodIsLoading,
      isLoaded: state.reports.investPeriodIsLoaded
    };
  },
  { getInvestPeriod }
)(AdminSchema);
