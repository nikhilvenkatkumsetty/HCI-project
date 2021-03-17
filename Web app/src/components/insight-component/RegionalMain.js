import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import "../../assets/styles/chart-styles/social_media.scss"
import {regionalChannel} from "./ChartInfo";
import { Link } from "react-router-dom";
// Import our demo components
import Chart from "./chart-components/RegionalChart";

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
const RegionalMain = () => {
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
          <Chart options={chartOptions} highcharts={Highcharts} />
  
          </div>
          
   
            <div className="social_button_div">
            <Link to="/insight/statistics/media_chart4"><img src={left} alt="right_button"/></Link>
            <Link to="/insight/statistics/media_chart6"> <img style={{transform: "rotateY(178deg)"}} src={left} alt="right_button"/></Link>
           </div>
          
          
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <div className="right_chart_info">
          <div className="bind_div_com">
            <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{regionalChannel.date}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{regionalChannel.region}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{regionalChannel.time}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{regionalChannel.Notes}</span>
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
  
  
  export default RegionalMain;

