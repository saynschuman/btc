import React from "react";
import "./AdminSchema.scss";
import CustomInput from "./../../commmon/CustomInput/CustomInput";
import PerfectScrollbar from "react-perfect-scrollbar";

export default () => (
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
                <tr>
                  <td>1</td>
                  <td className={"input-58"}>
                    <CustomInput className={"bordered-input"} value={"1"} />
                  </td>
                  <td className={"input-84"}>
                    <CustomInput className={"bordered-input"} value={"0.1"} />
                  </td>
                  <td>
                    <div className="close-button-admin" />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className={"input-58"}>
                    <CustomInput className={"bordered-input"} value={"1"} />
                  </td>
                  <td className={"input-84"}>
                    <CustomInput className={"bordered-input"} value={"0.1"} />
                  </td>
                  <td>
                    <div className="close-button-admin" />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className={"input-58"}>
                    <CustomInput className={"bordered-input"} value={"1"} />
                  </td>
                  <td className={"input-84"}>
                    <CustomInput className={"bordered-input"} value={"0.1"} />
                  </td>
                  <td>
                    <div className="close-button-admin" />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className={"input-58"}>
                    <CustomInput className={"bordered-input"} value={"1"} />
                  </td>
                  <td className={"input-84"}>
                    <CustomInput className={"bordered-input"} value={"0.1"} />
                  </td>
                  <td>
                    <div className="close-button-admin" />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className={"input-58"}>
                    <CustomInput className={"bordered-input"} value={"1"} />
                  </td>
                  <td className={"input-84"}>
                    <CustomInput className={"bordered-input"} value={"0.1"} />
                  </td>
                  <td>
                    <div className="close-button-admin" />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className={"input-58"}>
                    <CustomInput className={"bordered-input"} value={"1"} />
                  </td>
                  <td className={"input-84"}>
                    <CustomInput className={"bordered-input"} value={"0.1"} />
                  </td>
                  <td>
                    <div className="close-button-admin" />
                  </td>
                </tr>
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
