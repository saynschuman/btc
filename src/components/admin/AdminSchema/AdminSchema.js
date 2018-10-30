import React from "react";
import "./AdminSchema.scss";
import CustomInput from "./../../commmon/CustomInput/CustomInput";

export default () => (
  <div className={"admin-body schema-page"}>
    <div className="col col-50">
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
          <table className="settings-table">
            <tr>
              <th>№</th>
              <th>Кол-во месяцев</th>
              <th>Коэфицент начисления</th>
              <th />
            </tr>
            <tr>
              <td>1</td>
              <td>
                <CustomInput className={"bordered-input"} value={"1"} />
              </td>
              <td>
                <CustomInput className={"bordered-input"} value={"0.1"} />
              </td>
              <td>
                <div className="close-button-admin" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <CustomInput className={"bordered-input"} value={"1"} />
              </td>
              <td>
                <CustomInput className={"bordered-input"} value={"0.1"} />
              </td>
              <td>
                <div className="close-button-admin" />
              </td>
            </tr>
          </table>
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
