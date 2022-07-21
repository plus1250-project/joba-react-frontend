import React, { useState, useEffect } from 'react'
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import cx from "classnames";

import Widget from "../../../components/Widget/Widget.js";
import s from "../../tables/Tables.module.scss"
import ac from "./ArticlesList.module.scss";


const ArticlesList = (props) => {

  const [articlesList, setArticlesList] = useState([]);

  const refresh = (setArticlesList) => {};
  
  // 요청 날짜 설정
  let date = new Date(); 
  let issueDate = date.getFullYear() + "-" + ("00" + (date.getMonth() + 1)).slice(-2)+ "-" + ("00" + date.getDate()).slice(-2) ;
  
  // 자동화 전 더미 데이트
  const dummyDate = '2022-06-30';
  
  const BASEURL = 'http://localhost:3000/';

  const fetchData = (setArticlesList) => {
    axios
    .get(BASEURL+"article", {
      params: {
        industryName: props.industryName,
        issueDate: dummyDate
      }, 
      })
    .then((res) => {
      setArticlesList(res.data);
    })
  }

  useEffect(() => {
    fetchData(setArticlesList)
  }, [props.industryName])
  

  return (    
    <Widget>
      <div className={s.tableTitle}>
        <div className="headline-2">관련 기사</div>
      </div>
      <div   className={s.articleBlock}>
        <InfiniteScroll
            dataLength={articlesList.length}
            next={() => {fetchData(setArticlesList, articlesList);}}
            hasMore={true}
            height={870}
            loader={<h4>Loading...</h4>}
     
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
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
            {/* 기사 리스트 */}
          <ul>
            {articlesList.map((article) => (
              <li
                className={cx(`${ac.taskBlock}`, { [ac.completed]: false })}
                key={article.id}
              >
                <div className={ac.taskDescription}>
                  <a 
                  href={article.articleUrl}
                  style={{textDecoration :"none" ,color : "black"}}
                  >
                    <div
                      className="checkbox checkbox-primary mr-1">
                      {article.articleTitle}
                    </div>
                  </a>
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