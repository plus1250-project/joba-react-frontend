import React from 'react'
import MonthlyTrend from '../MonthlyTrend/MonthlyTrend'
import KeywordsMap from './KeywordsMap/KeywordsMap'

import classes from './KeywordsAnalysis.module.css';

const KeywordsAnalysis = () => {
  return (
    <div className={classes.content__body__analysis}>
        <KeywordsMap />
        <MonthlyTrend />
    </div>
  )
}

export default KeywordsAnalysis