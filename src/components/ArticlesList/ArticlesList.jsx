import React, {userState, userEffect, useEffect} from 'react'
import axios from 'axios';

import classes from './ArticlesList.module.css';



const ArticlesList = () => {



  // 첫번째 랜ㅓ링을 마친 후 실행
  // useEffect(
  //   () => {
      
  // );

  // axios
  const url = 'http://localhost:3000/article'
  axios.post(url, 
  {
    industryName: 'IT'
  },
  {
    headers: {
      'Content-type': 'application/json',
      'Accept': "application/json"
    }
  }
  ).then((response) => {console.log(response.data); })
  .catch((response) => {console.log('Error!'+url)});

  return (
    <div className={classes.main__body__article__list}>
        ArticlesList
        <div className={classes.main__body__article__item}>1</div>
        <div className={classes.main__body__article__item}>2</div>
        <div className={classes.main__body__article__item}>3</div>
        <div className={classes.main__body__article__item}>4</div>
        <div className={classes.main__body__article__item}>5</div>
        <div className={classes.main__body__article__item}>6</div>
    </div>
  )
}

export default ArticlesList