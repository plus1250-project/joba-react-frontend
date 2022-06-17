import React from 'react'

import classes from './ArticlesList.module.css';

const ArticlesList = () => {
  return (
    <div className={classes.article_list}>
        ArticlesList
        <div className={classes.item}>1</div>
        <div className={classes.item}>2</div>
        <div className={classes.item}>3</div>
        <div className={classes.item}>4</div>
    </div>
  )
}

export default ArticlesList