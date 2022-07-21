import React from "react";
import ApexCharts from "react-apexcharts";


export default function ApexLineColumnChart(props) {

  // 차트 세팅 더미 데이터
  const chart = props.chartSettings;
  
  // 오늘 날짜를 보고 달을 찾아서 저장
  let date = new Date();
  let month = date.getMonth() // month 지난 달 부터

  // 현재 월에서 -1 로 요청 ex. 7월 일 겨우 6월 데이터 요청
  let regMonth = date.getFullYear() + "-" + ("00" + (date.getMonth())).slice(-2);
 
  // console.log("Chart month : ", month);
  let labels = [(month-1) + '월' + month + '월'];
 
  // 차트 세팅 더미 데이터 재정의
  chart.labels = [(month-11),(month-10),(month-9),(month-8), (month-7), (month-6), (month-5), (month-4), (month-3), (month-2), (month-1), month];
  
  // 레이블이 현재 월을 기준으로 - 되기 때문에 0일 경우 & 음수가 될 경우 설정
  let k = 0;
  for(let i in chart.labels) {
    k = 12;

    // 현재 월을 기준으로 뒤로
    if(chart.labels[i] === 0) {
      chart.labels[i] = k;
    } else if(chart.labels[i] < 0) {
      // 12 를 기준으로 
      chart.labels[i] = k + chart.labels[i];
    }
  }


  return (
    <ApexCharts
      options={chart}
      series={props.series}
      type="area"
      height={300}
    />
  )
};