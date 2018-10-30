import React from "react";
import "./News.scss";

class News extends React.Component {
  render() {
    return (
      <div className={"admin-body"}>
        <div className="col col-30 left">
          <div className="admin-block">
            <div className="block-header">
              <div className="header-title news-title">Список новостей</div>
            </div>
            <div className="news-body">123</div>
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
              <article>
                <div className="article-title">Редактируемый заголовок</div>
                <p>
                  Повседневная практика показывает, что курс на
                  социально-ориентированный национальный проект требует
                  определения и уточнения системы обучения кадров,
                  соответствующей насущным потребностям. Повседневная практика
                  показывает, что курс на социально-ориентированный национальный
                  проект требует определения и уточнения системы обучения
                  кадров, соответствующей насущным потребностям.
                </p>

                <p>
                  Показывает, что курс на социально-ориентированный национальный
                  проект требует определения и уточнения системы обучения
                  кадров, соответствующей насущным потребностям. Повседневная
                  практика показывает, что курс на социально-ориентированный
                  национальный проект требует определения и уточнения системы
                  обучения кадров, соответствующей насущным потребностям.
                </p>
              </article>
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

export default News;
