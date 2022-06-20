import React, {useState} from 'react';

import Modal from '../Commons/Modal';
import EnterpriseItem from './EnterpriseItem';


// 기업 더미 데이터
const ENTERPRISE = [
    {
      id: "enter1",
      name: "기업 A",
      count: 100,
    },
    {
      id: "enter2",
      name: "기업 A",
      count: 80,
    },
    {
      id: "enter3",
      name: "기업 A",
      count: 50,
    },
    {
      id: "enter4",
      name: "기업 A",
      count: 20,
    },
    {
      id: "enter5",
      name: "기업 A",
      count: 10,
    },
  ];

const Enterprise = (props) => {

    const [enterprise, setEnterPrise] = useState(ENTERPRISE);
    console.log('enterprise');
    const listItems = (
        <ul>
            <h2>산업군 기업 리스트</h2>
            {/* <EnterpriseItem
                key={enterprise.id}
                name={enterprise.name}
                count={enterprise.count}
            /> */}
        </ul>
    );

    const modalBox = (
        console.log('enter-modalBox'),
        <>
            {listItems}
        </>
    );

    return <Modal onClose={props.onClose}>{modalBox}</Modal>
}

export default Enterprise