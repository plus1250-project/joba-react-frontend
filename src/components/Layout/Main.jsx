import React from 'react'
import CorpIndustry from '../CorpIndustry/CorpIndustry';
import ArticlesList from '../ArticlesList/ArticlesList';
import RecentUpKeyword from "../RecentUpKeyword/RecentUpKeyword";
import KeywordsMap from "../KeywordsAnalysis/KeywordsMap/KeywordsMap";
import MonthlyTrend from "../MonthlyTrend/MonthlyTrend";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.container}>
        <div className={classes.top}>
            <RecentUpKeyword />
            <CorpIndustry />
        </div>
        <div className={classes.middle}>
            <div>
                <KeywordsMap />
                <MonthlyTrend />
            </div>
            <ArticlesList />
        </div>
    </div>
  )
}

export default Main