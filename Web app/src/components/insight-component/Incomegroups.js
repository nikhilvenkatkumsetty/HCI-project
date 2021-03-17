import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from 'react';
import Highcharts from "highcharts";
import { Link } from "react-router-dom";
import TopappsChart from "./chart-components/TopappsChart";

import left from "../../assets/images/extra-constructs/left_arrow.png";
import './topapps_styles.css';


require("highcharts/modules/exporting")(Highcharts);

const options = {
  chart: {
    type: "column"
  },
  title: {
    text: "Indian residents shifting from low to high income groups"
  },
  xAxis: {
    categories: ["2005", "2016", "2017", "2018", "2025F"]
  },
  yAxis: {
    min: 0,
    title: ""
  },
  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.2f}%</b><br/>',
    shared: true
  },
  legend: {
    title: {
      text: "Catagories based on average monthly household income in 2015 INR"
    }
  },
  plotOptions: {
    column: {
      stacking: "percent",
      dataLabels: {
        enabled: true,
        format: " {point.percentage:.2f} %"
      }
    }
  },
  series: [
    {
      name: "Aspirers(7700-15400)",
      data: [8.0, 15.0, 15.0, 16.2, 20.0]
    },
    {
      name: "Next billion(2300-7700)",
      data: [42.0, 45.0, 45.3, 46.0, 46.0]
    },
    {
      name: "Strugglers(<2300)",
      data: [44.0, 31.0, 30.7, 27.6, 18.0]
    },
    {
      name: "Elite (>30800)",
      data: [1.5, 2.0, 2.6, 2.9, 5.0]
    },
    {
      name: "Affluent(15400-30800)",
      data: [3.0, 6.0, 6.4, 7.3, 11.0]
    }
  ]
};

class App extends React.Component {
  render() {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
