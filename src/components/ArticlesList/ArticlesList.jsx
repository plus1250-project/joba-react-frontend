import React from 'react'

import classes from './ArticlesList.module.css';

const ArticlesList = () => {
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