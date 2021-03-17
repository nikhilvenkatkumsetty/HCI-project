import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import "../../assets/styles/chart-styles/social_media.scss"
import {resident} from "./ChartInfo";
import { Link } from "react-router-dom";
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

class Resident extends React.Component {
  render() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    return <div className="container fixed_header_margintop" style={{padding:"0rem 0 1rem",padding: "30px 0 57px"}}>
    <div className="res_title">
        <h3>
          We classify the sentiments of the articles where the concerned brand name has appeared. Using our propriety 
          NLP algorithm, we are able to quantify the sentiments that act as a brand indicator.
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
        <div style={{border:"2px solid darkgrey",borderRadius:"5px"}}>
            <HighchartsReact highcharts={Highcharts} options={options} />;
        </div>
        
 
          <div className="social_button_div">
          <Link to="/insight/statistics/advertising_chart1"><img src={left} alt="right_button"/></Link>
          <Link to="/insight/statistics/advertising_chart3"> <img style={{transform: "rotateY(178deg)"}} src={left} alt="right_button"/></Link>
         </div>
        
        
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <div className="right_chart_info">
        <div className="bind_div_com">
          <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{resident.date}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{resident.region}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{resident.time}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{resident.Notes}</span>
        </div>
          <div className="right_restaurant">
            <h3 className="try_it_text">
              Would You like to get in the world of possibilities and get unique
              data led insights for your business
            </h3>
            <div>
            </div>
              <Link to="/demo"><button className="try_us_button"><span>TRY US</span> - <span style={{textTransform:"capitalize",fontWeight:"400"}}>It's Free</span></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  }
}
export default Resident;

