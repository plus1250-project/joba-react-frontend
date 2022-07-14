import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import {
  ButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";



import Widget from "../../../components/Widget/Widget.js";
import mock from "../../tables/mock.js"

import s from "../../tables/Tables.module.scss"

import Statefulbubble from "./StatefullBubble";

import moreIcon from "../../../assets/tables/moreIcon.svg";
const KeywordBubbleChart = (props) => {
    const [transactions, setTransactions] = useState(mock.transactionsWidget);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => {
        setDropdownOpen(!dropdownOpen);
      }
    
      const transactionMenuOpen = (id) => {
        setTransactions(
          transactions.map( transaction => {
            if (transaction.id === id) {
              transaction.dropdownOpen = !transaction.dropdownOpen;
            }
            return transaction;
          })
        )
      }


      //
      

  return (
    <Widget>
        <div className={s.tableTitle}>
            <div className="headline-2">언급량 분석</div>
            {/* <div>
            <ButtonDropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                className=""
            >
                <DropdownToggle caret>
                &nbsp; Weekly &nbsp;
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem>Daily</DropdownItem>
                <DropdownItem>Weekly</DropdownItem>
                <DropdownItem>Monthly</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            <img src="" alt="Filter option"/>
            </div> */}
        </div>
        <div className={s.widgetContentBlock}>
          <Statefulbubble industryName={props.industryName} onChangeChart={props.onChangeChart}/>
            {/* {transactions.map(item => (
            <div key={uuidv4()} className={s.content}>
                <div><img src={item.icon} alt="Item" /><span className="body-2 ml-3">{item.category}</span></div>
                <div className="body-3 muted d-none d-md-block">{item.date}</div>
                <div className="body-2">{item.price}</div>
                <div className="body-3 muted d-none d-lg-block">{item.description}</div>

                <Dropdown
                className="d-none d-sm-block"
                nav
                isOpen={item.dropdownOpen}
                toggle={() => transactionMenuOpen(item.id)}
                >
                <DropdownToggle nav>
                    <img className="d-none d-sm-block" src={moreIcon} alt="More ..."/>
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
                </Dropdown> */}
            {/* </div>
            ))} */}
        </div>
    </Widget>
  )
}

export default KeywordBubbleChart