import React from "react";
import "./News.scss";
import { article } from "../../../backend/mocks";
import { getArticles } from "../../../actions";
import { connect } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import AdminsLoader from "../AdminSettings/AdminsLoader/AdminsLoader";
import Article from "./components/Article";

class News extends React.Component {
  componentDidMount() {
    !this.props.isLoaded && this.props.getArticles();
  }
  render() {
    return (
      <div className={"admin-body"}>
        <div className="col col-30 left">
          <div className="admin-block">
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
                    <div className="article-title">Редактируемый заголовок</div>
                    <p>
                      Повседневная практика показывает, что курс на
                      социально-ориентированный национальный проект требует
                      определения и уточнения системы обучения кадров,
                      соответствующей насущным потребностям. Повседневная
                      практика показывает, что курс на социально-ориентированный
                      национальный проект требует определения и уточнения
                      системы обучения кадров, соответствующей насущным
                      потребностям.
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
    );
  }
}

export default connect(
  state => {
    return {
      isLoading: state.articles.isLoading,
      isLoaded: state.articles.isLoaded,
      articles: state.articles.articlesList
    };
  },
  { getArticles }
)(News);
