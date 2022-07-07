import React, { useEffect, useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import {
    Table,
    Pagination,
    PaginationItem,
    PaginationLink,
  } from "reactstrap";

import Widget from "../../../components/Widget/Widget.js";
import mock from "../../tables/mock.js"

import s from "../../tables/Tables.module.scss"

import cloudIcon from "../../../assets/tables/cloudIcon.svg";
import funnelIcon from "../../../assets/tables/funnelIcon.svg";
import optionsIcon from "../../../assets/tables/optionsIcon.svg";
import printerIcon from "../../../assets/tables/printerIcon.svg";
import searchIcon from "../../../assets/tables/searchIcon.svg";

const MonthlyRankList = (props) => {

    const [firstTable] = useState(mock.firstTable);
    const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
    const [ranksList, setRanksList] = useState([]);
   
    const pageSize = 4;
    const firstTablePagesCount = Math.ceil(firstTable.length / pageSize);

    const BASEURL = 'http://localhost:3000/';

    const ranks = [];

    // 현재 월에서 -1 로 요청 ex. 7월 일 겨우 6월 데이터 요청
    let date = new Date(); 
    let regMonth = date.getFullYear() + "-" + ("00" + (date.getMonth())).slice(-2);


    // 월별 랭킹 키워드 요청
    useEffect(() => {
        axios.get(BASEURL+"month-rank-keyword/" + props.industryName + "/" + regMonth)
        .then(response => {
          console.log(response.data);
          setRanksList(response.data);
        })
      }, [props.industryName]
    );

    // 받아 온 월별 키워드 정리
    for (const key in ranksList) {
        ranks.push({
            id: key,
            keyword: ranksList[key].keyword,
            regMonth: ranksList[key].regMonth,
            industryName: ranksList[key].industryName,
            keywordCnt: ranksList[key].keywordCnt,
            monthRank: ranksList[key].monthRank,
        })
    }

    ranks.sort((a, b) => a.monthRank - b.monthRank);
    console.log(ranks); 
    
    const setFirstTablePage = (e, index) => {
        e.preventDefault();
        setFirstTableCurrentPage(index);
    }
    

  return (
    <Widget>
    <div className={s.tableTitle}>
      <div className="headline-2">월별 순위 리스트</div>
      <div className="d-flex">
        <a href="/#"><img src={searchIcon} alt="Search"/></a>
        <a href="/#"><img className="d-none d-sm-block" src={cloudIcon} alt="Cloud" /></a>
        <a href="/#"><img src={printerIcon} alt="Printer" /></a>
        <a href="/#"><img className="d-none d-sm-block" src={optionsIcon} alt="Options" /></a>
        <a href="/#"><img src={funnelIcon} alt="Funnel" /></a>
      </div>
    </div>
    <div className="widget-table-overflow">
      <Table className={`table-striped table-borderless table-hover ${s.statesTable}`} responsive>
        <thead>
        <tr >
          <th className="w-25"><span className="ml-4">RANK</span></th>
          <th className="w-25"><span>KEYWORD</span></th>
          <th className="w-25">DATE</th>
          <th className="w-25">COUNT</th>
        </tr>
        </thead>
        <tbody>
        {ranks
          .map(item => (
            <tr key={uuidv4()}>
              <td><span className="ml-5">{item.monthRank}</span></td>
              <td className="d-flex align-items-center"><span className="ml-3">{item.keyword}</span></td>
              <td>{item.regMonth}</td>
              <td>{item.keywordCnt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <Pagination className="pagination-borderless" aria-label="Page navigation example">
        <PaginationItem disabled={firstTableCurrentPage <= 0}>
          <PaginationLink
            onClick={e => setFirstTablePage(e, firstTableCurrentPage - 1)}
            previous
            href="#top"
          />
        </PaginationItem>
        {[...Array(firstTablePagesCount)].map((page, i) =>
          <PaginationItem active={i === firstTableCurrentPage} key={i}>
            <PaginationLink onClick={e => setFirstTablePage(e, i)} href="#top">
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem disabled={firstTableCurrentPage >= firstTablePagesCount - 1}>
          <PaginationLink
            onClick={e => setFirstTablePage(e, firstTableCurrentPage + 1)}
            next
            href="#top"
          />
        </PaginationItem>
      </Pagination> */}
    </div>
  </Widget>
  )
}

export default MonthlyRankList