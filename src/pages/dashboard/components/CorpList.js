import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Widget from '../../../components/Widget/Widget';
import Modal from '../../../components/Commons/Modal';
import CorpContainer from '../../tables/components/CorpContainer/CorpContainer';

import s from '../../tables/Tables.module.scss'

// 기업 더미 데이터
const CORP = [
    {
      id: "corp1",
      name: "기업 A",
      count: 100,
    },
    {
      id: "corp2",
      name: "기업 A",
      count: 80,
    },
    {
      id: "corp3",
      name: "기업 A",
      count: 50,
    },
    {
      id: "corp4",
      name: "기업 A",
      count: 20,
    },
    {
      id: "enter5",
      name: "기업 A",
      count: 10,
    },
  ];


const CorpList = (props) => {

    const [corpList, setCorpList] = useState([]);
    console.log(props);

    const BASEURL = 'http://localhost:3000/';

    const corps = [];

    
    useEffect(() => {
        axios.get(BASEURL+"indus_corp_list", {
          params: {industryName: props.industryName}})
        .then(response => {
          console.log(response.data);
          setCorpList(response.data);
        })
      }, [props.industryName]);

      console.log(corpList);

    const listItems = (
        <Widget>
            <div className={s.tableTitle}>
            <div className="headline-2">기업 리스트</div>
            </div>
            <div className={s.widgetContentBlock}>
                <CorpContainer corps={CORP}/>
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