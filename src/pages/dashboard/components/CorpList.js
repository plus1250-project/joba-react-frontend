import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

import axios from 'axios';

import Widget from '../../../components/Widget/Widget';
import Modal from '../../../components/Commons/Modal';
import CorpContainer from '../../tables/components/CorpContainer/CorpContainer';

import s from '../../tables/Tables.module.scss'
import classes from './CorpList.module.scss'

const CorpList = (props) => {

    const [corpList, setCorpList] = useState([]);

    const { industryName } = useSelector(state => state.industry);
    
    
    // 현재 월에서 -1 로 요청 ex. 7월 일 겨우 6월 데이터 요청
    let date = new Date(); 
    let regMonth = date.getFullYear() + "-" + ("00" + (date.getMonth())).slice(-2);
    
    //  산업군별 성장 기업 리스트 요청  
    const BASEURL = 'http://localhost:3000/';
    useEffect(() => {
      axios.get(BASEURL+"industry/corporation-growth/" + industryName  + "/" + regMonth)
      .then(response => {
        console.log(response.data);
        setCorpList(response.data);
      })
    }, [industryName]
    );
    
    // 받아 온 월별 키워드 정리
    const corps = [];
    for (const key in corpList) {
      corps.push({
            id: key,
            corpName: corpList[key].corpName,
            corpRank: corpList[key].corpRank,
            growthRate : corpList[key].growthRate,
        })
    }

    corps.sort((a,b)=> a.corpRank - b.corpRank)

    const listItems = (
        <Widget>
            
            <div className={classes.modalHeader}>
              <div className="headline-2">성장 기업 리스트</div>
              <div>{industryName}</div>
            </div>
            
            <div className={classes.widgetContentBlock}>
              {/* 시가총액 추가해야 함  */}
                <CorpContainer corps={corps}/>
            </div>
        </Widget>
    );

    const modalBox = (
        console.log('enter-modalBox'),
        <>
            {listItems}
        </>
    );

  return <Modal onClose={props.onClose}>{modalBox}</Modal>
}

export default CorpList