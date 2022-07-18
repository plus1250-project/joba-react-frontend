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
            keyword: cKeywordList[key].keyword,
            regMonth: cKeywordList[key].regMonth,
            industryName: cKeywordList[key].industryName,
            increment: cKeywordList[key].increment,
            fluctRank: cKeywordList[key].fluctRank,
            // color: 'red',
            // status: 'abc',
        

        })
    }




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
                                    <div>{item.fluctRank === 0 ? <td className="d-flex align-items-center" style={{color:"blue"}}>-</td> : item.fluctRank > 10 ? <td className="d-flex align-items-center" style={{color:"red"}}>NEW</td> : item.fluctRank > 0 ? <td className="d-flex align-items-center" style={{color:"red"}}>{item.fluctRank}▲</td> : <td className="d-flex align-items-center" style={{color:"blue"}}>{item.fluctRank}▼</td>}</div>
                                    {/* < 0 ? <td className="d-flex align-items-center" style={{color:"blue"}}>{item.fluctRank}▼</td> : <td className="d-flex align-items-center" style={{color:"red"}}>{item.fluctRank}▲</td>}</div> */}
                                    
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        </Widget>
    )
}

export default CompareKeywordList