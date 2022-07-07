import React, { useEffect, useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import {
    Table,
    Pagination,
    PaginationItem,
    PaginationLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
} from "reactstrap";

import Widget from "../../../components/Widget/Widget.js";
import mock from "../../tables/mock.js"

import s from "../../tables/Tables.module.scss"

import moreIcon from "../../../assets/tables/moreIcon.svg";

const CompareKeywordList = (props) => {
 
    const [secondTable] = useState(mock.secondTable);
    const [secondTableCurrentPage, setSecondTableCurrentPage] = useState(0);
    const [tableDropdownOpen, setTableMenuOpen] = useState(false);
    const [cKeywordList, setCKeywordList] = useState([]);

    const pageSize = 4;

    const cKeywords = [];

    const secondTablePagesCount = Math.ceil(secondTable.length / pageSize);
  
    const setSecondTablePage = (e, index) => {
        e.preventDefault();
        setSecondTableCurrentPage(index);
    }

    const tableMenuOpen = () => {
    setTableMenuOpen(!tableDropdownOpen);
    }

    const BASEURL = 'http://localhost:3000/';

    // 현재 월에서 -1 로 요청 ex. 7월 일 겨우 6월 데이터 요청
    let date = new Date(); 
    let regMonth = date.getFullYear() + "-" + ("00" + (date.getMonth())).slice(-2);


    // 월별 랭킹 키워드 요청
    useEffect(() => {
        axios.get(BASEURL+"compare-keyword/" + props.industryName + "/" + regMonth)
        .then(response => {
          console.log(response.data);
          setCKeywordList(response.data);
        })
      }, [props.industryName]
    );

    // 받아 온 월별 키워드 정리
    for (const key in cKeywordList) {
        cKeywords.push({
            id: key,
            keyword: cKeywordList[key].keyword,
            regMonth: cKeywordList[key].regMonth,
            industryName: cKeywordList[key].industryName,
            increment: cKeywordList[key].increment,
            fluctRank: cKeywordList[key].fluctRank,
        })
    }



    // 지금 랭킹도 들어 있었으면 좋겠다. monthly Rank 처럼

  return (
    <Widget className="borderless">
        <div className={s.tableTitle}>
            <div className="headline-2">전월 대비 순위 변화</div>
            <Dropdown
            className="d-none d-sm-block"
            nav
            isOpen={tableDropdownOpen}
            toggle={() => tableMenuOpen()}
            >
                <DropdownToggle nav>
                    <img className="d-none d-sm-block" src={moreIcon} alt="More..."/>
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>
                    <div>Copy</div>
                    </DropdownItem>
                    <DropdownItem>
                    <div>Edit</div>
                    </DropdownItem>
                    <DropdownItem>
                    <div>Delete</div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div className="widget-table-overflow">
            <Table className="table-striped table-borderless table-hover" responsive>
                <thead>
                <tr>
                    <th className="w-25"><span className="ml-4">RANK</span></th>
                    <th className="w-25">KEYWORD</th>
                    <th className="w-25">INCREMENT</th>
                    <th className="w-25">STATUS</th>
                </tr>
                </thead>
                <tbody>
                {cKeywords
                    .map(item => (
                    <tr key={uuidv4()}>
                    <th><span className="ml-5">-</span></th>
                    <td className="d-flex align-items-center"><span className="ml-3">{item.keyword}</span></td>
                    <td>{item.increment}</td>
                    <td className="d-flex align-items-center">{item.fluctRank}</td>
                    <td><Badge color={item.color}>{item.status}</Badge></td>
                    </tr>
                ))}
                </tbody>
            </Table>
            {/* <Pagination className="pagination-with-border">
            <PaginationItem disabled={secondTableCurrentPage <= 0}>
                <PaginationLink
                onClick={e => setSecondTablePage(e, secondTableCurrentPage - 1)}
                previous
                href="#top"
                />
            </PaginationItem>
            {[...Array(secondTablePagesCount)].map((page, i) =>
                <PaginationItem active={i === secondTableCurrentPage} key={i}>
                <PaginationLink onClick={e => setSecondTablePage(e, i)} href="#top">
                    {i + 1}
                </PaginationLink>
                </PaginationItem>
            )}
            <PaginationItem disabled={secondTableCurrentPage >= secondTablePagesCount - 1}>
                <PaginationLink
                onClick={e => setSecondTablePage(e, secondTableCurrentPage + 1)}
                next
                href="#top"
                />
            </PaginationItem>
            </Pagination> */}
        </div>
    </Widget>
  )
}

export default CompareKeywordList