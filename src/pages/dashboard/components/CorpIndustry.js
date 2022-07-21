import React from 'react'

import Widget from "../../../components/Widget/Widget.js";

import s from "../../tables/Tables.module.scss"

import heartYellow from "../../../assets/dashboard/heartYellow.svg";


const CorpIndustry = (props) => {

  return (
    <Widget className="widget-p-sm"  >
        <div className={`${s.smallWidget} ${s.pointer}`} onClick={props.onOpen}>
            <div className="d-flex mb-4">
              <img className="py-1 ml-2 mr-2 mt-4 img-fluid" src={heartYellow} alt="..." style={{width :"15%"}}/>
              <div className="d-flex flex-column">
                  <p className="headline-1 ml-4" style={{margin :"33px 0 0 0"}}>성장 기업 리스트</p>                
              </div>
            </div>
        </div>
    </Widget>
  )
}

export default CorpIndustry