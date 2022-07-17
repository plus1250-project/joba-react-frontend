import React, { useState } from 'react'
import { Button, Col, Row } from 'reactstrap';
import MonthlyRankList from './MonthlyRankList';

import s from "../../tables/Tables.module.scss"
import CompareKeywordList from './CompareKeywordList';
// N월 만들기
let date = new Date();
let monthNumber = date.getMonth();
let yearNumber = date.getFullYear();
// let regMonth = yearNumber + "-" + ("00" + (monthNumber)).slice(-2);

const FooterRankList = (props) => {

  const [regMonth, setRegMonth] = useState(yearNumber + "-" + ("00" + (monthNumber)).slice(-2))



  const onPlusMonth = () => {
    monthNumber += 1
    // 현재 월을 기준으로 뒤로
    if (monthNumber === 13) {
      monthNumber = 1;
      yearNumber += 1;
    }
    // let regMonth = yearNumber + "-" + ("00" + (monthNumber)).slice(-2);
    setRegMonth((regMonth) => yearNumber + "-" + ("00" + (monthNumber)).slice(-2));
    console.log(monthNumber);
    console.log(regMonth);
  }


  const onMinusMonth = () => {
    monthNumber -= 1
    // 현재 월을 기준으로 뒤로
    if (monthNumber === 0) {
      monthNumber = 12;
      yearNumber -= 1;
    }
    // let regMonth = yearNumber + "-" + ("00" + (monthNumber)).slice(-2);
    setRegMonth((regMonth) => yearNumber + "-" + ("00" + (monthNumber)).slice(-2));
    console.log(monthNumber);
    console.log(regMonth);
  }


  return (
    // {/* footer */}
    //       {/*MontlyRank , CompareKeyword */}
    <Row className="pl-grid-col mb-4 align-items-center">
      <Col>
        <Row className="align-items-center justify-content-center">
          <div className={s.monthTitle}>
            <button
              className="btn btn-primary mr-4"
              onClick={() => onMinusMonth()}>
              ◀
            </button>
            <div 
            className="headline-2"
            >{yearNumber}년 {monthNumber}월</div>
            <button
              className="btn btn-primary ml-4 "
              onClick={() => onPlusMonth()}>
              ▶
            </button>
          </div>
        </Row>
        <Row>
          <Col xs={12} xl={6}>
            <MonthlyRankList industryName={props.industryName} regMonth={regMonth} />
          </Col>
          <Col xs={12} xl={6}>
            <CompareKeywordList industryName={props.industryName} regMonth={regMonth} />
          </Col>

        </Row>
      </Col >
    </Row >
  )
}

export default FooterRankList