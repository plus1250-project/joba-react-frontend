import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Progress } from "reactstrap";

import Widget from "../../../components/Widget/Widget.js";

import s from "../../tables/Tables.module.scss";

import heartRed from "../../../assets/dashboard/heartRed.svg";

const KeywordBlock = (props) => {


    const [increaseKeyword, setIncreaseKeyword] = useState([]);
    const [mKeyword, setMKeyword] = useState("");

    const BASEURL = 'http://localhost:3000/';

    const keywords = [];

    // increase_keyword 요청
    useEffect(() => {
        axios.get(BASEURL+"increase_keyword", {
        params: {industryName: props.industryName}})
        .then(response => {
        console.log(response.data);
        setIncreaseKeyword(response.data);
        })
    }, [props.industryName]);

    // 배열 정리
    for (const key in increaseKeyword) {
        keywords.push({
            id: key,
            keyword: increaseKeyword[key].keyword,
            industryName: increaseKeyword[key].industryName,
            increaseValue: increaseKeyword[key].increaseValue,
        })
    }
    
    // 키워드 상승 값 비교 후 가장 높은 값 k 에 저장
    let k = 0;
    keywords.forEach((keyword) => {
        console.log(keyword);
        let n = parseInt(keyword.increaseValue);
        if(n > k) {
            console.log(n);
            k = n;
            console.log('k value: ', k);
        } else {
            console.log('else', keyword.increaseValue);
        }
    })
    
    // 키워드 상승 값과 저장해 둔 가장 높은 값 k 가 같으면 state 에 저장
    useEffect(() => {
        keywords.forEach((keyword) => {
            let n = parseInt(keyword.increaseValue);
            if(n === k) {
                setMKeyword(keyword.keyword);
            
            }
        })
    })
    console.log(mKeyword);


  return (
    <Widget className="widget-p-sm">
        <div className={s.smallWidget}>
            <div className="d-flex mb-4">
            <img className="py-1 mr-2 mt-4 img-fluid" src={heartRed} alt="..." />
            <div className="d-flex flex-column">
                <p className="headline-3 ml-4">급상승 키워드</p>
                <p className="headline-1 ml-4 mt-2">{mKeyword}</p>
                
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