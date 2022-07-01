import React, { useEffect, useState } from "react";
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

const RankChangeList = () => {
 
    const [secondTable] = useState(mock.secondTable);
    const [secondTableCurrentPage, setSecondTableCurrentPage] = useState(0);
    const [tableDropdownOpen, setTableMenuOpen] = useState(false);

    const pageSize = 4;

    const secondTablePagesCount = Math.ceil(secondTable.length / pageSize);
  
    const setSecondTablePage = (e, index) => {
        e.preventDefault();
        setSecondTableCurrentPage(index);
    }

    const tableMenuOpen = () => {
    setTableMenuOpen(!tableDropdownOpen);
    }

  return (
    <Widget className="border">
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
                    <th className="w-25">NAME</th>
                    <th>PRODUCT</th>
                    <th>CITY</th>
                    <th>STATUS</th>
                </tr>
                </thead>
                <tbody>
                {secondTable
                    .map(item => (
                    <tr key={uuidv4()}>
                    <td className="d-flex align-items-center"><span className="ml-3">{item.name}</span></td>
                    <td>{item.product}</td>
                    <td>{item.city}</td>
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

export default RankChangeList