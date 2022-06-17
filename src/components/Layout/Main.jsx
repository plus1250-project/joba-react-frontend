import React from 'react'

import Header from '../Layout/Header';
import CorpIndustry from '../CorpIndustry/CorpIndustry';
import ArticlesList from '../ArticlesList/ArticlesList';
import RecentUpKeyword from "../RecentUpKeyword/RecentUpKeyword";
import KeywordsMap from "../KeywordsAnalysis/KeywordsMap/KeywordsMap";
import MonthlyTrend from "../MonthlyTrend/MonthlyTrend";
import MonthlyList from "../MonthlyList/MonthlyList";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <div className={classes.main__inner}>
        <Header />
        <div className={classes.main__header}>
            <RecentUpKeyword />
            <CorpIndustry />
        </div>
        <div className={classes.main__body}>
            <div className={classes.main__body__left}>
                <KeywordsMap />
                <MonthlyTrend />
            </div>
            <div className={classes.main__body__article}>
                <ArticlesList />
            </div>
        </div>
        <div className={classes.main__footer}>
            <MonthlyList />
            
        </div>
      </div>
    </div>
  )
}

export default Main