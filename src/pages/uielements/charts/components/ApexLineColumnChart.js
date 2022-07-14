import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";




export default function ApexLineColumnChart(props) {

  // store 
  
  // useEffect(() => {
  //   console.log("됨??");
  // }, [props.bubbleName])
  console.log("trendList 2: ", props.trendList);

  const chartData = [];
 
  const chart = props.chartSettings;
  
  // 오늘 날짜를 보고 달을 찾아서 변수를 저장해야한다.
  let date = new Date();
  let month = date.getMonth() // month 지난 달 부터

  // 현재 월에서 -1 로 요청 ex. 7월 일 겨우 6월 데이터 요청
  let regMonth = date.getFullYear() + "-" + ("00" + (date.getMonth())).slice(-2);
 
  // console.log("Chart month : ", month);
  let labels = [(month-1) + '월' + month + '월'];
 
  chart.labels = [(month-8), (month-7), (month-6), (month-5), (month-4), (month-3), (month-2), (month-1), month];
  


  let k = 0;
  for(let i in chart.labels) {
    // console.log(chartSettings.labels[i]);
    k = 12;

    // 현재 월을 기준으로 뒤로
    if(chart.labels[i] === 0) {
      chart.labels[i] = k;
    } else if(chart.labels[i] < 0) {
      // 12 를 기준으로 
      chart.labels[i] = k + chart.labels[i];
    }
  }
  // console.log(chartSettings.labels);


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

// for (const key in trendList) {
//   chartData.push({
//         id: key,
//         keywordCnt: trendList[key].keywordCnt,
//     })
// }



// console.log(num);
// console.log(chartData[0].keyword);
// console.log(props.series[0]);
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

// series[1] = [{
//   name: 'Social Media',
//   type: 'line',
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
      options={chart}
      series={props.series}
      type="area"
      height={300}
    />
  )
};

