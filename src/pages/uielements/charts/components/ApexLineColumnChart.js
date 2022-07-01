import React from "react";
import ApexCharts from "react-apexcharts";

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

export default function ApexLineColumnChart() {

  // 오늘 날짜를 보고 달을 찾아서 변수를 저장해야한다.
  let today = new Date();
  let month = today.getMonth() + 1 // month
 
  console.log("Chart month : ", month);
  let labels = [(month-1) + '월' + month + '월'];
 
  chartSettings.labels = [(month-8), (month-7), (month-6), (month-5), (month-4), (month-3), (month-2), (month-1), month];
  
  let k = 0;
  for(let i in chartSettings.labels) {
    console.log(chartSettings.labels[i]);
    k = 12;

    // 현재 월을 기준으로 뒤로
    if(chartSettings.labels[i] === 0) {
      chartSettings.labels[i] = k;
    } else if(chartSettings.labels[i] < 0) {
      // 12 를 기준으로 
      chartSettings.labels[i] = k + chartSettings.labels[i];
    }
  }
  console.log(chartSettings.labels);

  return (
    <ApexCharts
      options={chartSettings}
      series={series}
      type="area"
      height={300}
    />
  )
};

