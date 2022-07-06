import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Progress } from "reactstrap";

import Widget from "../../../components/Widget/Widget.js";

import s from "../../tables/Tables.module.scss";

import heartRed from "../../../assets/dashboard/heartRed.svg";

const KeywordBlock = (props) => {


    const [increaseKeyword, setIncreaseKeyword] = useState([]);

    const BASEURL = 'http://localhost:3000/';
    
    // 현재 월에서 -1 로 요청 ex. 7월 일 겨우 6월 데이터 요청
    let date = new Date(); 
    let regMonth = date.getFullYear() + "-" + ("00" + (date.getMonth())).slice(-2);

    // increase_keyword 요청
    useEffect(() => {
        axios.get(BASEURL+"increase-keyword/" + props.industryName + "/" + regMonth)
        .then(response => {
        console.log(response.data);
        setIncreaseKeyword(response.data);
        })
    }, [props.industryName]);

  return (
    <Widget className="widget-p-sm">
        <div className={s.smallWidget}>
            <div className="d-flex mb-4">
            <img className="py-1 mr-2 mt-4 img-fluid" src={heartRed} alt="..." />
            <div className="d-flex flex-column">
                <p className="headline-3 ml-4">최근 상승 키워드</p>
                <p className="headline-1 ml-4 mt-2">{increaseKeyword}</p>
                
            </div>
            </div>
            <div>
            {/* <Progress color="secondary-red" className={`progress-xs ${s.mutedPink}`} value="75" /> */}
            </div>
        </div>
    </Widget>
  )
}

export default KeywordBlock