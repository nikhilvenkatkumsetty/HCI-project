import React from "react";
import HighchartsReact from "highcharts-react-official";

class Chart extends React.Component {
  exportChart = () => {
    this.chart.exportChart();
  };
  componentDidMount() {
    this.chart = this.refs.pieChart.pieChart;
  }

  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={this.props.highcharts}
          constructorType={"chart"}
          options={this.props.options}
          ref={"pieChart"}
        />
        <button onClick={this.exportChart}>Export</button>
      </div>
    );
  }
}

export default Chart;
