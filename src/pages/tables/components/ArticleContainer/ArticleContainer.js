import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import s from "./ArticleContainer.module.scss";
import cx from "classnames";


const ArticleContainer = (props) => {

  console.log("A article :", props.articles);
  return (
    <div></div>
    // <div className={s.iScroll}>
    //   <InfiniteScroll
    //     dataLength={props.articles.length}
    //     next={fetchData}
    //     hasMore={true}
    //     loader={<h4>Loading...</h4>}
    //     endMessage={
    //       <p style={{ textAlign: 'center' }}>
    //         <b>Yay! You have seen it all</b>
    //       </p>
    //     }
    //     // below props only if you need pull down functionality
    //     refreshFunction={props.refreshFunction}
    //     pullDownToRefresh
    //     pullDownToRefreshThreshold={50}
    //     pullDownToRefreshContent={
    //       <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
    //     }
    //     releaseToRefreshContent={
    //       <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
    // }
    //   >
    //   <ul>
    //     {props.articles.map((article) => (
    //       <li
    //         className={cx(`${s.taskBlock}`, { [s.completed]: false })}
    //         key={article.id}
    //       >
    //         <div className={s.taskDescription}>
    //           <div
    //             className="checkbox checkbox-primary mr-1">
    //             {article.articleTitle}
    //           </div>
    //           <div className="body-3"></div>
    //         </div>
    //         <div>
    //           <div className={s.time}>{article.press}</div>
    //           <div className={s.time}>{article.issueDate}</div>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    //   </InfiniteScroll>
    // </div>
  )
}

export default ArticleContainer;
