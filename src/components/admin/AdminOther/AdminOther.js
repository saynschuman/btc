import React from 'react'
import './AdminOther.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { getYieldList } from '../../../actions'
import { connect } from 'react-redux'
import ReportsLoader from '../AdminReports/ReportsLoader/ReportsLoader'
import AdminsLoader from '../AdminSettings/AdminsLoader/AdminsLoader'
import YieldTable from './components/YieldTable'
import YieldTableMobile from './components/YieldTableMobile'

class AdminOther extends React.Component {
  componentDidMount() {
    !this.props.isLoaded && this.props.getYieldList()
  }
  render() {
    return (
      <div className={'admin-body other-page'}>
        <div className="clearfix">
          <div className="col col-50 left">
            <div className="admin-block">
              <div className="block-header">
                <div className="header-title agreement-title">
                  Редактирование пользовательного соглашения
                </div>
              </div>
              <div className="other-body">
                <PerfectScrollbar>
                  <div className="body-inner">
                    <p>
                      Повседневная практика показывает, что курс на социально-ориентированный
                      национальный проект требует определения и уточнения системы обучения кадров,
                      соответствующей насущным потребностям.
                    </p>

                    <p>
                      Задача организации, в особенности же дальнейшее развитие различных форм
                      деятельности влечет за собой процесс внедрения и модернизации дальнейших
                      направлений развитая системы массового участия!
                    </p>

                    <p>Разнообразный и богатый опыт рамки и место обучения.</p>

                    <p>
                      Повседневная практика показывает, что курс на социально-ориентированный
                      национальный проект требует определения и уточнения системы обучения кадров,
                      соответствующей насущным потребностям.
                    </p>

                    <p>Разнообразный и богатый опыт рамки и место обучения.</p>

                    <p>
                      Задача организации, в особенности же дальнейшее развитие различных форм
                      деятельности влечет за собой процесс внедрения и модернизации дальнейших
                      направлений развитая системы массового участия!
                    </p>
                  </div>
                </PerfectScrollbar>
              </div>

              <div className="block-footer">
                <div className="settings-save schema-save">Сохранить</div>
              </div>
            </div>
          </div>
          <div className="col col-50 right">
            <div className="admin-block">
              <div className="block-header">
                <div className="header-title bitcoin-title agreement-title">
                  Доходность проекта, %
                </div>
              </div>
              <div className="other-body">
                <div className="settings-body-desktop">
                  <PerfectScrollbar className={'no-ver-scrl'}>
                    <div className="right-body-inner">
                      <table className="settings-table">
                        <tbody>
                          {this.props.isLoading && <ReportsLoader />}
                          {this.props.isLoaded &&
                            this.props.yieldList.map((report, index) => (
                              <YieldTable
                                key={index}
                                ind={index}
                                month={report.month}
                                yield={report.yield}
                              />
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </PerfectScrollbar>
                </div>
                <div className="settings-body-mobile">
                  <PerfectScrollbar className={'edit-admins-mobile'}>
                    {this.props.isLoading && <AdminsLoader />}
                    {this.props.isLoaded &&
                      this.props.yieldList.map((report, index) => {
                        return (
                          <YieldTableMobile
                            key={index}
                            ind={index}
                            month={report.month}
                            yield={report.yield}
                          />
                        )
                      })}
                  </PerfectScrollbar>
                </div>
              </div>
              <div className="block-footer">
                <div className="settings-save schema-save">Сохранить</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      isLoading: state.reports.yieldListIsLoading,
      isLoaded: state.reports.yieldListIsLoaded,
      yieldList: state.reports.yieldList,
    }
  },
  { getYieldList }
)(AdminOther)
