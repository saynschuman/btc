import React from "react";
import "./AdminHomepage.scss";
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'bitcoin curse',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

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
                      <div className="header-title users">Количество активных инвесторов</div>
                  </div>
                  <p className="block-body">54</p>
              </div>
              <div className={'admin-block'}>
                  <div className="block-header">
                      <div className="header-title light">Остаток мощности у проекта</div>
                  </div>
                  <p className="block-body">1.021 TH/s</p>
              </div>
              <div className={'admin-block'}>
                  <div className="block-header">
                      <div className="header-title graph">Текущая стоимость единицы мощности</div>
                  </div>
                  <p className="block-body smaller38">1 TH/s = 1 BTC</p>
              </div>
          </div>
            <div className="col col-right">
                <div className={'admin-block gr'}>
                    <div className="block-header">
                      <div className="header-title">График курса BTC</div>
                    </div>
                    <Line data={data} />
                    <p className="block-body smaller28">1BTC = 6 952,04$      1BTC = 399 574P</p>
                </div>
              <div className="col middle mr">
                  <div className={'admin-block'}>
                      <div className="block-header">
                          <div className="header-title hand">Мощность всех инвесторов</div>
                      </div>
                      <p className="block-body smaller38">1.021 TH/s</p>
                  </div>
              </div>
                <div className="col middle ml">
                    <div className={'admin-block'}>
                        <div className="block-header">
                            <div className="header-title money">Количество активных инвестиций</div>
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
