import React, { useState, useEffect } from 'react'
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import cx from "classnames";

import Widget from "../../../components/Widget/Widget.js";
import s from "../../tables/Tables.module.scss"
import ac from "./ArticlesList.module.scss";
import ArticleContainer from "../../tables/components/ArticleContainer/ArticleContainer";




const ArticlesList = (props) => {

    const [articlesList, setArticlesList] = useState([]);
    const [lastArticleId, setLastArticleId] = useState(0);

    const BASEURL = 'http://localhost:3000/';

    const articles = [];

    // let observer = new IntersectionObserver(callback, options);

    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 1.0,
    };

    // 뉴스기사 요청 첫번째
    // useEffect(() => {
    //   axios.get(BASEURL+"article", {
    //     params: {industryName: props.industryName}})
    //   .then(response => {
    //     console.log(response.data);
    //     setArticlesList(response.data);
    //   })
    // }, [props.industryName]);

    let date = new Date(); 
    let issueDate = date.getFullYear() + "-" + ("00" + (date.getMonth() + 1)).slice(-2)+ "-" + ("00" + date.getDate()).slice(-2) ;
    const dummyDate = '2022-06-30';

    let page = 1;
    const fetchData = (setArticlesList, articles) => {
      axios
      .get(BASEURL+"article", {
        params: {
    
          industryName: props.industryName,
          issueDate: dummyDate
        }, 
          _page:{page},
          _limit: 5
        })
      .then((res) => {
        setArticlesList([...articlesList, ...res.data]);
        page = page + 1;
      })
    }

    useEffect(() => {
      fetchData(setArticlesList, articlesList)

    }, [])
    

    const refresh = (setArticlesList) => {};

    articlesList.sort((a, b) => b.articleId - a.articleId);
    console.log(articlesList);


    // 받아 온 뉴스 기사 정리
    // for (const key in articlesList) {
    //     articles.push({
    //         id: key,
    //         industryName: articlesList[key].industryName,
    //         articleUrl: articlesList[key].articleUrl,
    //         issueDate: articlesList[key].issueDate,
    //         articleTitle: articlesList[key].articleTitle,
    //         press: articlesList[key].press
    //     })
    // }

  return (
    
    <Widget>
      <div className={s.tableTitle}>
        <div className="headline-2">관련 기사</div>
      </div>
      <div className={s.articleBlock}>
        <InfiniteScroll
            dataLength={articlesList.length}
            next={() => {fetchData(setArticlesList, articlesList);}}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            // below props only if you need pull down functionality
            refreshFunction={refresh}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            }
          >
          <ul>
            {articlesList.map((article) => (
              <li
                className={cx(`${ac.taskBlock}`, { [ac.completed]: false })}
                key={article.id}
              >
                <div className={ac.taskDescription}>
                  <div
                    className="checkbox checkbox-primary mr-1">
                    {article.articleTitle}
                  </div>
                  <div className="body-3"></div>
                </div>
                <div>
                  <div className={ac.time}>{article.press}</div>
                  <div className={ac.time}>{article.issueDate}</div>
                </div>
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    </Widget>
               
  )
}

export default ArticlesList