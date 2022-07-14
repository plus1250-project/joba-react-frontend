import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Progress,
  ButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  ButtonToggle,
  ButtonToolbar,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeIndustryName } from "../../actions/industry.js";
import axios from 'axios';

import KeywordBlock from "./components/KeywordBlock.js";
import CorpIndustry from "./components/CorpIndustry.js";
import KeywordBubbleChart from "./components/KeywordBubbleChart.js";
import TrendChart from "./components/TrendChart";
import ArticlesList from "./components/ArticlesList.js";
import MonthlyRankList from "./components/MonthlyRankList.js";
import CompareKeywordList from "./components/CompareKeywordList";

import Widget from "../../components/Widget/Widget.js";
import mock from "../tables/mock.js"

import s from "../tables/Tables.module.scss"

import heartTeal from "../../assets/dashboard/heartTeal.svg";
import heartViolet from "../../assets/dashboard/heartViolet.svg";
import FooterRankList from "./components/FooterRankList.js";


let keywordCnt = []; 

const Dashboard = (props) => {
  const [tableDropdownOpen, setTableMenuOpen] = useState(false);

  // dispatch 를 통해 action 실행 (changeIndustryName(industryName))
  const dispatch = useDispatch();
  const changeIndus = (props) => {
    dispatch(changeIndustryName(props))
  }

  // selector 를 이용해 reducer에 컴바인된 industry 가져오기 (reducers/index.js) 함수 내의 변수과 동일해야 함 
  const { industryName } = useSelector(state => state.industry);

  console.log(industryName);

  let [ trendList, setTrendList ] = useState([]);
  // const { bubbleName } = useSelector(state => state.bubble);
  // console.log("-------------Chart : ", bubbleName);

  // 월별 트렌드 차트 데이터 요청
  const BASEURL = 'http://localhost:3000/';

   // 오늘 날짜를 보고 달을 찾아서 변수를 저장해야한다.
   let date = new Date();
   let month = date.getMonth() // month 지난 달 부터
 
   // 현재 월에서 -1 로 요청 ex. 7월 일 겨우 6월 데이터 요청
   let regMonth = date.getFullYear() + "-" + ("00" + (date.getMonth())).slice(-2);
  
   // console.log("Chart month : ", month);
   let labels = [(month-1) + '월' + month + '월'];

  let bubbleName = "global";
  const series = [];

  let onChangeChart = ((props) => {
    console.log("클릭 : ", props);
    bubbleName = props;
    
    axios.get(BASEURL+"month-keyword/" + props + "/" + industryName + "/" + regMonth)
    .then(response => {
      console.log(response.data);
      setTrendList(response.data);
    })
    
  });


  return (
    <div>

      <Row>
        <Col>
          {/* main header */}
          <Row className="mb-4">
            <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
              <KeywordBlock industryName={props.industryName} />
            </Col>
            <Col className="mb-4 mb-xl-0 cursor:pointer" xs={6} sm={6} xl={3} onClick={() => { changeIndus(props.industryName) }}>
              <CorpIndustry onOpen={props.onOpen} />
            </Col>
            <Col xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img className="py-1 mr-2 img-fluid" src={heartTeal} alt="..." />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Text</p>
                      <p className="body-2">Num<span className="body-3 muted">/ ber</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="secondary-cyan" className={`progress-xs ${s.mutedTeal}`} value="75" />
                  </div>
                </div>
              </Widget>
            </Col>
            {/* <Col xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img className="py-1 mr-2 img-fluid" src={heartViolet} alt="..." />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Text</p>
                      <p className="body-2">Num<span className="body-3 muted">/ ber</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="violet" className={`progress-xs ${s.mutedViolet}`} value="75" />
                  </div>
                </div>
              </Widget>
            </Col> */}
          </Row>
          {/* middle */}
          <Row className="mb-4">
            {/* Bubble Chart & TrendChart */}
            <Col xs={12} xl={8} className="pl-grid-col mt-4 mt-xl-0">
              <Row className="pl-grid-row">
                <Col>
                  <KeywordBubbleChart industryName={props.industryName} onChangeChart={onChangeChart} bubbleName={bubbleName}/>
                </Col>
              </Row>
              <Row className="pl-grid-row mt-4">
                <Col>
                  <TrendChart industryName={props.industryName} trendList={trendList} series={series}/>
                </Col>
              </Row>
            </Col>
            {/* Articles List */}
            <Col xs={12} xl={4} className="pl-grid-col mt-4 mt-xl-0">
              <ArticlesList industryName={props.industryName} />
            </Col>
          </Row>
          <FooterRankList industryName={props.industryName}/>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;
