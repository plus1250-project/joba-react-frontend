import { useState, useEffect } from 'react';
import axios from 'axios';
import Bubble from './Bubble'



const data1 ={
  value:0,
  children: [
    // {
    //   name : 'node1',
    //   value : 350
    // },
    // {
    //   name : 'node2',
    //   value : 300
    // },
    // {
    //   name : 'node3',
    //   value : 200
    // },
    // {
    //   name : 'node4',
    //   value : 350
    // },
    // {
    //   name : 'node5',
    //   value : 150
    // },
    // {
    //   name : 'node6',
    //   value : 100
    // },
    // {
    //   name : 'node7',
    //   value : 200
    // },
    // {
    //   name : 'node8',
    //   value : 100
    // },
    // {
    //   name : 'node9',
    //   value : 150
    // },
    // {
    //   name : 'node10',
    //   value : 250
    // },
    // {
    //   name : 'node11',
    //   value : 50
    // },
    // {
    //   name : 'node12',
    //   value : 50
    // },
    // {
    //   name : 'node13',
    //   value : 50
    // },
    // {
    //   name : 'node14',
    //   value : 10
    // },
  ]
}

const Statefulbubble = (props) => {

  const [trendKeyword, setTrendKeyword] = useState([]);

  const BASEURL = 'http://localhost:3000/';


  const data1 ={
    value:0,
    children: []};
  // 월은 +1 필요 / 30일 까지 데이터 요청 필요
  let date = new Date(); 
  let issueDate = date.getFullYear() + "-" + ("00" + (date.getMonth() + 1)).slice(-2)+ "-" + ("00" + date.getDate()).slice(-2) ;

  console.log(issueDate);

  // 더미 날짜
  let sample = new Date('2022-06-30');
  let sampleDate = sample.getFullYear() + "-" + ("00" + (sample.getMonth() + 1)).slice(-2)+ "-" + ("00" + sample.getDate()).slice(-2) ;
  console.log(sampleDate);

  // trend_keyword 요청
  useEffect(() => {
    axios.get(BASEURL+"keyword/trend/" + props.industryName + "/" + sampleDate)
    .then(response => {
    console.log(response.data);
    setTrendKeyword(response.data);
    })
  }, [props.industryName]);

  console.log(trendKeyword);

// 받아 온 월별 키워드 정리
for (const key in trendKeyword) {
  data1.children.push({
      id: key,
      name: trendKeyword[key].keyword,
      value: trendKeyword[key].keywordCnt,
  })
}

console.log(data1);
  // const [array, setArray] = useState(data)
  // const additionalData = {
  //   name: 'Site 5',
  //   value: 99999,
  // }

  // const addToArray = () => {
  //   // console.log(additionalData)
  //   setArray(prevObj => ({ ...prevObj, children: [...prevObj.children, additionalData] }))
  // // ...prevObj, children: [...prevObj.children, additionalData]}))
  //   console.log(array)
  // }

  return (
    <>
      {/* eslint-disable-next-line react/button-has-type */}
      {/* <button onClick={addToArray}>Click</button> */}
      <Bubble data={data1} onChangeChart={props.onChangeChart}/>
    </>
  )
}
export default Statefulbubble
