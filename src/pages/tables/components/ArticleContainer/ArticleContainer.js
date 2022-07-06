import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import s from "./ArticleContainer.module.scss";
import cx from "classnames";


const ArticleContainer = (props) => {

  console.log("A article :", props.articles);
  return (
    <InfiniteScroll
      dataLength={props.articles.length}
      next={props.moreData}
      hasMore={true}
    >
    <ul>
      {props.articles.map((article) => (
        <li
          className={cx(`${s.taskBlock}`, { [s.completed]: false })}
          key={article.id}
        >
          <div className={s.taskDescription}>
            <div
              className="checkbox checkbox-primary mr-1">
              {article.articleTitle}
            </div>
            <div className="body-3"></div>
          </div>
          <div>
            <div className={s.time}>{article.press}</div>
            <div className={s.time}>{article.issueDate}</div>
          </div>
        </li>
      ))}
    </ul>
    </InfiniteScroll>
  )
}

export default ArticleContainer;