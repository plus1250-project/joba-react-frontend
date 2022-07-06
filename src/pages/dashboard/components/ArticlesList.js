import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Widget from "../../../components/Widget/Widget.js";
import s from "../../tables/Tables.module.scss"
import ArticleContainer from "../../tables/components/ArticleContainer/ArticleContainer";

const ArticlesList = (props) => {

    const [articlesList, setArticlesList] = useState([]);

    const BASEURL = 'http://localhost:3000/';

    const articles = [];

    // 뉴스기사 요청
    useEffect(() => {
      axios.get(BASEURL+"article", {
        params: {industryName: props.industryName}})
      .then(response => {
        console.log(response.data);
        setArticlesList(response.data);
      })
    }, [props.industryName]);

    // 받아 온 뉴스 기사 정리
    for (const key in articlesList) {
        articles.push({
            id: key,
            industryName: articlesList[key].industryName,
            articleUrl: articlesList[key].articleUrl,
            issueDate: articlesList[key].issueDate,
            articleTitle: articlesList[key].articleTitle,
            press: articlesList[key].press
        })
    }

  return (
    
    <Widget>
      <div className={s.tableTitle}>
        <div className="headline-2">관련 기사</div>
      </div>
      <div className={s.widgetContentBlock}>
        <ArticleContainer articles={articles} />
      </div>
    </Widget>
               
  )
}

export default ArticlesList