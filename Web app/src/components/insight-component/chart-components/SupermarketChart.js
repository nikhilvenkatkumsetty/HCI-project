import React from "react";
import HighchartsReact from "highcharts-react-official";

class Supermarket extends React.Component {
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
      <div style={{border:"1px solid grey", padding: "10px 0 55px", height:"70vh"}}>
        <HighchartsReact
          highcharts={this.props.highcharts}
          constructorType={"chart"}
          options={this.props.options}
          ref={"chart"}
          
        />
        </div>
      </div>
    );
  }
}

export default Supermarket;
