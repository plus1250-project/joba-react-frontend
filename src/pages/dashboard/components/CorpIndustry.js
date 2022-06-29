import React from 'react'
import { Progress } from "reactstrap";

import Widget from "../../../components/Widget/Widget.js";

import heartYellow from "../../../assets/dashboard/heartYellow.svg";

import s from "../../tables/Tables.module.scss"

const CorpIndustry = (props) => {

    console.log(props.industryName);

  return (
    <Widget className="widget-p-sm"  >
        <div className={`${s.smallWidget} ${s.pointer}` }>
            <div className="d-flex mb-4">
            <img className="py-1 mr-2 img-fluid" src={heartYellow} alt="..." />
            <div className="d-flex flex-column">
                <p className="headline-2 ml-4 mt-4">기업 리스트</p>
                
            </div>
            </div>
            <div>
            <Progress color="secondary-yellow" className={`progress-xs ${s.mutedYellow}`} value="75" />
            </div>
        </div>
    </Widget>
  )
}

export default CorpIndustry