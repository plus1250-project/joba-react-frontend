import React from 'react'
import Widget from '../../../components/Widget/Widget'

import s from "../../tables/Tables.module.scss"
import heartTeal from "../../../assets/dashboard/heartTeal.svg";

const CorpGrowthIndustry = () => {
  return (
    <Widget className="widget-p-sm">
    <div className={s.smallWidget}>
      <div className="d-flex mb-4">
        <img className="py-1 ml-2 mr-2 mt-4 img-fluid" src={heartTeal} alt="..." style={{width :"15%"}} />
        <div className="d-flex flex-column">
          <p className="headline-2 mt-2 ml-4">성장 기업 리스트</p>
          <p className="headline-1 ml-4 mt-2">기업 이름</p>
        </div>
      </div>
      <div>
      </div>
    </div>
  </Widget>
  )
}

export default CorpGrowthIndustry