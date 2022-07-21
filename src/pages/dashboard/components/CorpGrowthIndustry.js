import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Widget from '../../../components/Widget/Widget'

import s from "../../tables/Tables.module.scss"
import heartTeal from "../../../assets/dashboard/heartTeal.svg";
import axios from 'axios';


const CorpGrowthIndustry = (props) => {

  const [corpList, setCorpList] = useState([]);

  
  const BASEURL = 'http://localhost:3000/';
  
  // 현재 월에서 -1 로 요청 ex. 7월 일 겨우 6월 데이터 요청
  let date = new Date();
  let regMonth = date.getFullYear() + "-" + ("00" + (date.getMonth())).slice(-2);
  
  //  산업군별 우량 기업 리스트 요청  
  useEffect(() => {
    axios.get(BASEURL + "industry/corporation/" + props.industryName + "/" + regMonth)
    .then(response => {
      setCorpList(response.data);
    })
  }, [props.industryName]
  );
  
  // 받아 온 월별 키워드 정리
  const corps = [];
  for (const key in corpList) {
    corps.push({
      id: key,
      corpName: corpList[key].corpName,
      corpRank: corpList[key].corpRank,
    })
  }

  corps.sort((a, b) => a.corpRank - b.corpRank)

  const aa = []
  for (let i = 0; i < corps.length; i++) {
    aa[i] = corps[i].corpName;
  }

  const bigIndustList = ['기업1', '기업2', '기업3', '기업4', '기업5']
  const [numberlist, setNumberlist] = useState(0);
  let bigIndust = aa[numberlist]

  useEffect(() => {

    if (numberlist >= aa.length)
      setNumberlist(0);

    const timeout = setTimeout(() => {
      setNumberlist(numberlist + 1)
    }, 2500);

    return () => clearTimeout(timeout);
  }, [numberlist]);


  return (
    <Widget className="widget-p-sm">
      <div className={s.smallWidget}>
        <div className="d-flex mb-4">
          <img className="py-1 ml-2 mr-2 mt-4 img-fluid" src={heartTeal} alt="..." style={{ width: "15%" }} />
          <div className="d-flex flex-column">
            <p className="headline-2 mt-2 ml-4">우량 기업 리스트</p>
            <div className={s.bigIndust}>
              <p className="headline-1 ml-4 mt-2">{bigIndust}</p>
            </div>
          </div>
        </div>
      </div>
    </Widget>
  )
}

export default CorpGrowthIndustry