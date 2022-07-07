import React, { useState, useEffect } from "react";
import axios from 'axios';
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

const series = [{
  name: 'Website Blog',
  type: 'column',
  data: [440, 505, 384, 671, 327, 413, 201, 352, 622]
}, {
  name: 'Social Media',
  type: 'line',
  data: [50, 42, 35, 27, 39, 22, 17, 31, 26]
}];

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

export default function ApexLineColumnChart(props) {

  // store 
  const { bubbleName } = useSelector(state => state.bubble);
  const [ trendList, setTrendList ] = useState([]);
  console.log("-------------Chart : ", bubbleName);

  const chartData = [];
  const BASEURL = 'http://localhost:3000/';

  

  // 오늘 날짜를 보고 달을 찾아서 변수를 저장해야한다.
  let date = new Date();
  let month = date.getMonth() // month 지난 달 부터

  // 현재 월에서 -1 로 요청 ex. 7월 일 겨우 6월 데이터 요청
  let regMonth = date.getFullYear() + "-" + ("00" + (date.getMonth())).slice(-2);
 
  // console.log("Chart month : ", month);
  let labels = [(month-1) + '월' + month + '월'];
 
  chartSettings.labels = [(month-8), (month-7), (month-6), (month-5), (month-4), (month-3), (month-2), (month-1), month];
  
  let k = 0;
  for(let i in chartSettings.labels) {
    // console.log(chartSettings.labels[i]);
    k = 12;

    // 현재 월을 기준으로 뒤로
    if(chartSettings.labels[i] === 0) {
      chartSettings.labels[i] = k;
    } else if(chartSettings.labels[i] < 0) {
      // 12 를 기준으로 
      chartSettings.labels[i] = k + chartSettings.labels[i];
    }
  }
  // console.log(chartSettings.labels);

  // 월별 키워드 요청
  useEffect(() => {
    axios.get(BASEURL+"month-keyword/" + bubbleName + "/" + props.industryName + "/" + regMonth)
    .then(response => {
      console.log(response.data);
      setTrendList(response.data);
    })
  }, [bubbleName]
);
const num = [];
console.log(trendList);

// const onChange = () => {
//   for(const i in trendList) {
//     num[i] = trendList[i].keywordCnt;
//   }
//   series[0].data = num;
// }
// 받아 온 월별 키워드 정리
// for (const key in trendList) {
//   chartData.push({
//         id: key,
//         keyword: trendList[key].keyword,
//         industryName: trendList[key].industryName,
//         regMonth: trendList[key].regMonth,
//         keywordCnt: trendList[key].keywordCnt,
//     })
// }

for (const key in trendList) {
  chartData.push({
        id: key,
        keywordCnt: trendList[key].keywordCnt,
    })
}



console.log(num);
// console.log(chartData[0].keyword);
console.log(series[0]);
// series[0] = [{
//   name: 'Website Blog',
//   type: 'column',
//   data: [
//     chartData[0].keywordCnt,
//     chartData[1].keywordCnt,
//     chartData[2].keywordCnt,
//     chartData[3].keywordCnt,
//     chartData[4].keywordCnt,
//     chartData[5].keywordCnt,
//     chartData[6].keywordCnt,
//     chartData[7].keywordCnt,
//     chartData[8].keywordCnt,
// ]}]



console.log("ChartData : ", chartData);

  return (
    <ApexCharts
      options={chartSettings}
      series={series}
      type="area"
      height={300}
    />
  )
};

