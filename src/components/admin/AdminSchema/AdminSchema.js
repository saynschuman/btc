import React from "react";
import "./AdminSchema.scss";

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
        <div className="settings-body">123</div>
        <div className="settings-footer">123</div>
      </div>
    </div>
  </div>
);
