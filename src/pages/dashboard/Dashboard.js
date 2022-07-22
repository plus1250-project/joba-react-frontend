import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { changeIndustryName } from "../../actions/industry.js";
import axios from 'axios';

import KeywordBlock from "./components/KeywordBlock.js";
import CorpIndustry from "./components/CorpIndustry.js";
import KeywordBubbleChart from "./components/KeywordBubbleChart.js";
import TrendChart from "./components/TrendChart";
import ArticlesList from "./components/ArticlesList.js";
import FooterRankList from "./components/FooterRankList.js";
import CorpGrowthIndustry from "./components/CorpGrowthIndustry.js";


const Dashboard = (props) => {

  let [ trendList, setTrendList ] = useState();
  
  const dispatch = useDispatch();
  const changeIndus = (props) => {
    dispatch(changeIndustryName(props))
  }
  
  // 등록 날짜 - 현재 월에서 -1 로 요청 ex. 7월 일 경우 6월 데이터 요청
  let regMonth = new Date().getFullYear() + "-" + ("00" + (new Date().getMonth())).slice(-2);
 
  // 등록 날짜 (자동화 전 더미 데이터)
  // let dummyDate = new Date().getFullYear() + "-" + ("00" + (new Date().getMonth())).slice(-2) + "-" + "30";
  let dummyDate = '2022-07-17'

  const BASEURL = 'http://localhost:3000/';
   
  let onChangeChart = ((props) => {
  
    axios.get(BASEURL+"keyword/monthly/" + props.bubbleName + "/" + props.industryName + "/" + dummyDate)
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
            <Col className="mb-4 mb-xl-0" >
              <KeywordBlock industryName={props.industryName} />
            </Col>
            <Col xs={6} sm={6} xl={4}>
              <CorpGrowthIndustry industryName={props.industryName}/>
            </Col>
            <Col className="mb-4 mb-xl-0 cursor:pointer" onClick={() => { changeIndus(props.industryName) }}>
                <CorpIndustry onOpen={props.onOpen} />
            </Col>
          </Row>
          {/* middle */}
          <Row className="mb-4">
            {/* Bubble Chart & TrendChart */}
            <Col xs={12} xl={8} className="pl-grid-col mt-4 mt-xl-0">
              <Row className="pl-grid-row">
                <Col>
                  <KeywordBubbleChart industryName={props.industryName} onChangeChart={onChangeChart} />
                </Col>
              </Row>
              <Row className="pl-grid-row mt-4">
                <Col>
                  <TrendChart industryName={props.industryName} trendList={trendList}/>
                </Col>
              </Row>
            </Col>
            {/* Articles List */}
            <Col xs={12} xl={4} className="pl-grid-col mt-4 mt-xl-0">
              <ArticlesList industryName={props.industryName} />
            </Col>
          </Row>
          {/* footer */}
          <FooterRankList industryName={props.industryName}/>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;