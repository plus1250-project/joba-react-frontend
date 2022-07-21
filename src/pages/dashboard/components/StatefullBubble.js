import { useState, useEffect } from 'react';
import axios from 'axios';
import Bubble from './Bubble'


const Statefulbubble = (props) => {

  const [trendKeyword, setTrendKeyword] = useState([]);

  const data1 ={
    value:0,
    children: []
  };
  
  // 월은 +1 필요 / 30일 까지 데이터 요청 필요
  let date = new Date(); 
  let issueDate = date.getFullYear() + "-" + ("00" + (date.getMonth() + 1)).slice(-2)+ "-" + ("00" + date.getDate()).slice(-2) ;
  
  // 더미 날짜
  let sample = new Date('2022-06-30');
  let sampleDate = sample.getFullYear() + "-" + ("00" + (sample.getMonth() + 1)).slice(-2)+ "-" + ("00" + sample.getDate()).slice(-2) ;
  
  // trend_keyword 요청
  const BASEURL = 'http://localhost:3000/';

  useEffect(() => {
    axios.get(BASEURL+"keyword/trend/" + props.industryName + "/" + sampleDate)
    .then(response => {
    console.log(response.data);
    setTrendKeyword(response.data);
    })
  }, [props.industryName]);

  // 받아 온 월별 키워드 정리
  for (const key in trendKeyword) {
    data1.children.push({
        id: key,
        name: trendKeyword[key].keyword,
        value: trendKeyword[key].keywordCnt,
    })
  }


  return (
    <>
      <Bubble 
        data={data1} 
        onChangeChart={props.onChangeChart}
        industryName={props.industryName}
        />
    </>
  )
}
export default Statefulbubble
