import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";

// Import our demo components
import Chart from "./chart-components/channels";

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      showInLegend: true,
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.2f} %"
      }
    }
  },
  title: {
    text: "Regional channels viewership share (2019) "
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.2f}%</b>"
  },

  series: [
    {
      name: "Percentage of viewers",
      data: [
        [44, "Oriya"],
        [0.3, "Assamese"],
        [12, "Marathi"],
        [7, "Bhojpuri"],
        [4, "Urdu"],
        [12, "English"],
        [3, "Hindi"],
        [1, "Gujarathi"],
        [7, "Tamil"],
        [2, "Kannada"],
        [0.5, "Bengali"],
        [4, "Telugu"],
        [2, "Malyalam"],
        [0.1, "Punjabi"],
        [1, "Multi Language"]
      ],
      keys: ["y", "name"],
      innerSize: "50%",
      type: "pie"
    }
  ]
};

// Render app with demo chart
const App = () => (
  <div>
    <Chart options={chartOptions} highcharts={Highcharts} />
  </div>
);

render(<App />, document.getElementById("root"));
