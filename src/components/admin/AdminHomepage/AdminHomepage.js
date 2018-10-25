import React from "react";
import "./AdminHomepage.scss";

class AdminHomepage extends React.Component {
  render() {
    return (
        <div className="admin-body">
          <div className="col col-left">
              <div className={'admin-block'}>
                  <div className="block-header">
                      <div className="header-title">Количество инвесторов</div>
                  </div>
                  <p className="block-body">123</p>
              </div>
              <div className={'admin-block'}>
                  <div className="block-header">
                      <div className="header-title">Количество активных инвесторов</div>
                  </div>
                  <p className="block-body">54</p>
              </div>
              <div className={'admin-block'}>
                  <div className="block-header">
                      <div className="header-title">Остаток мощности у проекта</div>
                  </div>
                  <p className="block-body">1.021 TH/s</p>
              </div>
              <div className={'admin-block'}>
                  <div className="block-header">
                      <div className="header-title">Текущая стоимость единицы мощности</div>
                  </div>
                  <p className="block-body smaller38">1 TH/s = 1 BTC</p>
              </div>
          </div>
            <div className="col col-right">
                <div className={'admin-block'}>
                    <div className="block-header">
                      <div className="header-title">График курса BTC</div>
                    </div>
                    <div className="gr"/>
                    <p className="block-body smaller28">1BTC = 6 952,04$      1BTC = 399 574P</p>
                </div>
              <div className="col middle mr">
                  <div className={'admin-block'}>
                      <div className="block-header">
                          <div className="header-title">Мощность всех инвесторов</div>
                      </div>
                      <p className="block-body smaller38">1.021 TH/s</p>
                  </div>
              </div>
                <div className="col middle ml">
                    <div className={'admin-block'}>
                        <div className="block-header">
                            <div className="header-title">Количество активных инвестиций</div>
                        </div>
                        <p className="block-body smaller38">70</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default AdminHomepage;
