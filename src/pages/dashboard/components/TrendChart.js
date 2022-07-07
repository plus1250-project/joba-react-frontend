import React from 'react'

import Widget from "../../../components/Widget/Widget";
import ApexLineColumnChart from "../../uielements/charts/components/ApexLineColumnChart"

const TrendChart = (props) => {
  return (
    <Widget className="widget-p-md">
        <div className="headline-2 mb-3">월별 트렌드 차트</div>
        <ApexLineColumnChart industryName={props.industryName}/>
    </Widget>
  )
}

export default TrendChart