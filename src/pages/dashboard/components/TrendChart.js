import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";



import Widget from "../../../components/Widget/Widget";
import ApexLineColumnChart from "../../uielements/charts/components/ApexLineColumnChart"



const chartSettings = {
  colors: ["#F7F8FB", "#FF5668"],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "straight",
    width: [0, 1]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    style: {
      fontSize: '10px',
      fontWeight: 500,
    },
    background: {
      borderWidth: 0,
    },
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  xaxis: {
    type: 'category',
    labels: {
      style: {
        colors: "#6B859E",
      },
    },
  },
  yaxis: [
    {
    title: {
      text: 'Website Blog',
      style: {
        fontSize: '12px',
        fontWeight: 400,
        color: "#6B859E",
      },
    },
    labels: {
      style: {
        colors: ["#6B859E"],
      },
    },
  }, {
    opposite: true,
    title: {
      text: 'Social Media',
      style: {
        fontSize: '12px',
        fontWeight: 400,
        color: "#6B859E",
      },
    },
    labels: {
      style: {
        colors: ["#6B859E"],
      },
    },
  }],
  fill: {
    type: "solid",
    opacity: 1,
  }
};

const TrendChart = (props) => {

  console.log("trendChar 1: ", props.trendList);

  // const trendList = props.trendList;
  // console.log("trednChart bubbleName: ", props.bubbleName);

  let [ trendList, setTrendList ] = useState([]);
  // const { bubbleName } = useSelector(state => state.bubble);
  // console.log("-------------Chart : ", bubbleName);

  // 월별 트렌드 차트 데이터 요청
  const BASEURL = 'http://localhost:3000/';

   // 오늘 날짜를 보고 달을 찾아서 변수를 저장해야한다.
   let date = new Date();
   let month = date.getMonth() // month 지난 달 부터
 
   // 현재 월에서 -1 로 요청 ex. 7월 일 겨우 6월 데이터 요청
   let regMonth = date.getFullYear() + "-" + ("00" + (date.getMonth())).slice(-2);
  
   // console.log("Chart month : ", month);
   let labels = [(month-1) + '월' + month + '월'];

   const series = [{
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 384, 671, 327, 413, 201, 352, 622]
  }, {
    name: 'Social Media',
    type: 'line',
    data: [50, 42, 35, 27, 39, 22, 17, 31, 26]
  }];


  useEffect(() => {
    axios
    .get(BASEURL+"month-keyword/" + props.bubbleName + "/" + props.industryName + "/" + regMonth)
    .then(response => {
      console.log(response.data);
      setTrendList(response.data);
    })
  }, [props.bubbleName]);

  const keyCnt = [];

  for (const key in props.trendList) {
    keyCnt.push({
        id: key,

        keywordCnt: props.trendList[key].keywordCnt,
  
    })
}
// console.log(trendList[0].keywordCnt);

// 

  // let iName = props.industryName;

  let bName = props.bubbleName;
  
  // props.onChangeTrendList(props.bubbleName)
  // useEffect(() => {
  //   console.log("됨??");
  //   setTrendList(bName )
  // }, [bName])
  
    
  let aa = []
  // console.log(series);
    
  // series[0].data = props.trendList.keywordCnt;
  console.log(keyCnt[0]);

  for (let i in keyCnt) {

  keyCnt.map(item => {
    aa[i] = item.keywordCnt;
  })
  }
  console.log(aa);
  console.log(series[1]);
  
  series.map(item => {
    item.data = aa;
  })
    // series[0] = [{
    //   name: 'Social Media',
    //   type: 'line',
    //   data: aa}]
  

  return (
    <Widget className="widget-p-md">
        <div className="headline-2 mb-3">월별 트렌드 차트{bName}</div>
        <dev>{bName}</dev>
        <ApexLineColumnChart 
          industryName={props.industryName} 
          chartSettings={chartSettings} 
          series={series}
          trendList={props.trendList}
          // bName={bName}
          />
    </Widget>
  )
}


export default TrendChart