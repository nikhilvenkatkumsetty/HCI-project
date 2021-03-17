import React from "react";
import HighchartsReact from "highcharts-react-official";

class Brand extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    
    this.exportChart = () => {
      this.chart.exportChart();
    };
  }
  componentDidMount() {
    this.chart = this.refs.chart.chart;
  }

  render() {
    return (
      <div>
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

export default Brand;
