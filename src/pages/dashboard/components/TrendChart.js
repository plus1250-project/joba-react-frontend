import React from 'react'

import Widget from "../../../components/Widget/Widget";
import ApexLineColumnChart from "../../uielements/charts/components/ApexLineColumnChart"

// 차트 세팅 더미 데이터
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

  // 차트 더미 데이터
  const series = [{
    name: 'Bar',
    type: 'column',
    data: [440, 505, 384, 671, 327, 413, 201, 352, 622]
  }, {
    name: 'Line',
    type: 'line',
    data: [50, 42, 35, 27, 39, 22, 17, 31, 26]
  }];

  // 받아 온 키워드, 집계량 
  const keyCnt = [];

  for (const key in props.trendList) {
    keyCnt.push({
        id: key,
        keyword: props.trendList[key].keyword,
        keywordCnt: props.trendList[key].keywordCnt,
  
    })
  }
  
  let aa = []
  let bName = [];
  for (let i = 0; i < keyCnt.length; i++) {
    aa[i] = keyCnt[i].keywordCnt;
    bName[i] = keyCnt[i].keyword;
  }
  
  series.map(item => {
    item.data = aa;
  })


  return (
    <Widget className="widget-p-md">
      <div className="headline-2 mt-1 mb-1">
        <div className=" mr-3" style={{float:"left"}}>월별 트렌드 차트</div>
        <div style={{float:"left" ,color:"#FF5959"}}>#{bName[0]}</div>
      </div>
      <br/>
      <br/>
      <ApexLineColumnChart 
        industryName={props.industryName} 
        chartSettings={chartSettings} 
        series={series}
        trendList={props.trendList}
      />
    </Widget>
  )
}

export default TrendChart