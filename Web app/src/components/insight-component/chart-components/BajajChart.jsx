import React from "react";
import HighchartsReact from "highcharts-react-official";

class BajajChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    // this.chart;
    this.exportChart = () => {
      this.chart.exportChart();
    };
  }
  componentDidMount() {
    this.chart = this.refs.chart.chart;
  }

  render() {
    return (
      <div style={{border:"1px solid grey", padding: "2px 0 47px", height: "70vh"}}>
        <HighchartsReact
          highcharts={this.props.highcharts}
          constructorType={"chart"}
          options={this.props.options}
          ref={"chart"}
        />
      </div>
    );
  }
}

export default BajajChart;
