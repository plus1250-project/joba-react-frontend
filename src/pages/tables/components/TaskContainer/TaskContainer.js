import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import s from "./TaskContainer.module.scss";
import cx from "classnames";


const TaskContainer = (props) => {

  console.log(props.articles);
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
          <div className={s.time}>{article.pubDate}</div>
        </li>
      ))}
    </ul>
    </InfiniteScroll>
  )
}

export default TaskContainer;
