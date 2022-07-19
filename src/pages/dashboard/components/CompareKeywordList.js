import axios from 'axios';
import React, { useEffect, useState } from "react";
import {
    Badge, Table
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";

import Widget from "../../../components/Widget/Widget.js";
import mock from "../../tables/mock.js";

import s from "../../tables/Tables.module.scss";


const CompareKeywordList = (props) => {

    const [secondTable] = useState(mock.secondTable);
    const [secondTableCurrentPage, setSecondTableCurrentPage] = useState(0);
    const [tableDropdownOpen, setTableMenuOpen] = useState(false);
    const [cKeywordList, setCKeywordList] = useState([]);

    const pageSize = 4;

    const cKeywords = [];
    const keyStatus = [];

    const secondTablePagesCount = Math.ceil(secondTable.length / pageSize);

    const setSecondTablePage = (e, index) => {
        e.preventDefault();
        setSecondTableCurrentPage(index);
    }

    const tableMenuOpen = () => {
        setTableMenuOpen(!tableDropdownOpen);
    }

    const BASEURL = 'http://localhost:3000/';



    // 월별 랭킹 키워드 요청
    useEffect(() => {
        axios.get(BASEURL + "compare-keyword/" + props.industryName + "/" + props.regMonth)
            .then(response => {
                console.log(response.data);
                setCKeywordList(response.data);
            })
    }, [props.industryName, props.regMonth]
    );


    // 받아 온 월별 키워드 정리
    for (const key in cKeywordList) {
        cKeywords.push({
            id: key,
            monthRank: cKeywordList[key].monthRank,
            keyword: cKeywordList[key].keyword,
            regMonth: cKeywordList[key].regMonth,
            industryName: cKeywordList[key].industryName,
            increment: cKeywordList[key].increment,
            fluctRank: cKeywordList[key].fluctRank,

        })
    }

    cKeywords.sort((a, b) => a.monthRank - b.monthRank);



    // 지금 랭킹도 들어 있었으면 좋겠다. monthly Rank 처럼

    return (
        <Widget className="borderless">
            <div className={s.tableTitle}>
                <div className="headline-2">전월 대비 순위 변화</div>
            </div>
            <div className="widget-table-overflow">
                <Table className="table-striped table-borderless table-hover" responsive>
                    <thead>
                        <tr>

                            <th className="w-25"><span className='ml-4'>INDEX</span></th>
                            
                            <th className="w-25"><span>KEYWORD</span></th>
                            <th className="w-25"><span>INCREMENT</span></th>
                            <th className="w-25"><span>STATUS</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cKeywords
                            .map(item => (
                                <tr key={uuidv4()}>
                                    <th><span className="ml-5">{item.monthRank}</span></th>
                                    <td className="ml-3 d-flex align-items-center"><span className='mr-2'>{item.keyword}</span></td>                                    
                                        <td><span className='float-right' style={{margin:"0 80px 0 0"}}>{item.increment}</span></td>        
                                    <div className='ml-4'>{item.fluctRank === 0 ? <td className="d-flex align-items-center ml-2" style={{ color: "blue" }}><span className='float-right' >-</span></td> : item.fluctRank > 10 ? <td className="d-flex align-items-center" style={{ color: "red" }}><span className='float-right' >NEW</span></td> : item.fluctRank > 0 ? <td className="d-flex align-items-center" style={{ color: "red" }}><span className='float-right' >▲{item.fluctRank}</span></td> : <td className="d-flex align-items-center" style={{ color: "blue" }}>▼{Math.abs(item.fluctRank)}</td>}</div>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        </Widget>
    )
}

export default CompareKeywordList