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

    let today = new Date();
    let month = today.getMonth() + 1

    // 월별 키워드 요청
    useEffect(() => {
        axios.post(BASEURL+"keyword_month_list", {
            industryName: props.industryName,
            month: month - 1,
        })
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
            month: ranksList[key].month,
            industryName: ranksList[key].industryName,
            keyCnt: ranksList[key].keyCnt,
        })
    }

    ranks.sort((a, b) => b.keyCnt - a.keyCnt);
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
        <tr>
          <th className="w-25"><span className="ml-3">KEYWORD</span></th>
          <th className="w-25">INDUSTRY</th>
          <th className="w-25">COUNT</th>
        </tr>
        </thead>
        <tbody>
        {ranks
          .map(item => (
            <tr key={uuidv4()}>
              <td className="d-flex align-items-center"><span className="ml-3">{item.keyword}</span></td>
              <td>{item.industryName}</td>
              <td>{item.keyCnt}</td>
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