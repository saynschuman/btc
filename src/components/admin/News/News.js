import React from "react";
import "./News.scss";
import { article } from "../../../backend/mocks";
import { getArticles, getPortalNews } from "../../../actions";
import { connect } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import AdminsLoader from "../AdminSettings/AdminsLoader/AdminsLoader";
import ReportsLoader from "../AdminReports/ReportsLoader/ReportsLoader";
import Article from "./components/Article";
import PortalNews from "./components/PortalNews";
import PortalNewsMobile from "./components/PortalNewsMobile";

class News extends React.Component {
  componentDidMount() {
    !this.props.isLoaded && this.props.getArticles();
    !this.props.portalNewsIsLoaded && this.props.getPortalNews();
  }
  render() {
    return (
      <div className={"admin-body"}>
        <div className="clearfix">
          <div className="col col-30 left">
            <div className="admin-block news-block-static-mobile">
              <div className="block-header">
                <div className="header-title news-title">Список новостей</div>
              </div>
              <div className="news-body">
                <PerfectScrollbar>
                  <div className="news-body-inner">
                    {this.props.isLoading && <AdminsLoader />}
                    {this.props.isLoaded &&
                      this.props.articles.map((article, index) => (
                        <Article
                          key={index}
                          title={article.title}
                          date={article.date}
                          image={article.smallImage}
                        />
                      ))}
                  </div>
                </PerfectScrollbar>
              </div>
              <div className="news-footer">
                <div className="settings-save schema-save">Добавить</div>
              </div>
            </div>
          </div>
          <div className="col col-70 right">
            <div className="admin-block">
              <div className="block-header">
                <div className="header-title edit-news-title">
                  Редактор: Новость 1 <span className={"date"}>20.08.2018</span>
                </div>
              </div>
              <div className="news-body">
                <PerfectScrollbar>
                  <div className="article-inner">
                    <div
                      className="featured-image"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <article>
                      <div className="article-title">
                        Редактируемый заголовок
                      </div>
                      <p>
                        Повседневная практика показывает, что курс на
                        социально-ориентированный национальный проект требует
                        определения и уточнения системы обучения кадров,
                        соответствующей насущным потребностям. Повседневная
                        практика показывает, что курс на
                        социально-ориентированный национальный проект требует
                        определения и уточнения системы обучения кадров,
                        соответствующей насущным потребностям.
                      </p>

                      <p>
                        Показывает, что курс на социально-ориентированный
                        национальный проект требует определения и уточнения
                        системы обучения кадров, соответствующей насущным
                        потребностям. Повседневная практика показывает, что курс
                        на социально-ориентированный национальный проект требует
                        определения и уточнения системы обучения кадров,
                        соответствующей насущным потребностям.
                      </p>
                    </article>
                  </div>
                </PerfectScrollbar>
              </div>

              <div className="news-footer">
                <div className="settings-save schema-save">Опубликовать</div>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-block portal">
          <div className="block-header">
            <div className="header-title edit-news-title">Портал новостей</div>
          </div>
          <div className="news-body settings-body-desktop">
            <PerfectScrollbar>
              <div className="news-portal-inner">
                <table className="settings-table">
                  <tbody>
                    <tr>
                      <th>№</th>
                      <th>Ссылка на сайт</th>
                      <th>Статус</th>
                      <th />
                    </tr>
                    {this.props.portalNewsIsLoading && <ReportsLoader />}
                    {this.props.portalNewsIsLoaded &&
                      this.props.portalNews.map((portal, index) => (
                        <PortalNews
                          ind={index}
                          key={portal.id}
                          link={portal.link}
                          status={portal.status}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </PerfectScrollbar>
          </div>
          <div className="news-body settings-body-mobile">
            <PerfectScrollbar className={"edit-admins-mobile"}>
              {this.props.portalNewsIsLoading && <AdminsLoader />}
              {this.props.portalNewsIsLoaded &&
                this.props.portalNews.map((portal, index) => (
                  <PortalNewsMobile
                    ind={index}
                    key={portal.id}
                    link={portal.link}
                    status={portal.status}
                  />
                ))}
            </PerfectScrollbar>
          </div>
          <div className="news-footer">
            <div className="settings-save schema-save news-save-portal">
              Сохранить одобрения
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
      isLoading: state.articles.isLoading,
      isLoaded: state.articles.isLoaded,
      articles: state.articles.articlesList,
      portalNewsIsLoading: state.portal.isLoading,
      portalNewsIsLoaded: state.portal.isLoaded,
      portalNews: state.portal.portalNews
    };
  },
  { getArticles, getPortalNews }
)(News);
