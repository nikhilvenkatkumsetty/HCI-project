import React from "react";
// Import Highcharts
import Highcharts from "highcharts";
import { Link } from "react-router-dom";
// Import our demo components
import BajajChart from "./chart-components/BajajChart";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import "../../assets/styles/chart-styles/social_media.scss"
import {socialmedia} from "./ChartInfo";
// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      showInLegend: true,
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      },
    },
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  title: {
    text: "News analysis for Bajaj Auto",
  },
  series: [
    {
      name: "Percentage of sentiment",
      colorByPoint: true,
      data: [
        {
          name: "Very Negative",
          y: 3.9,
        },
        {
          name: "Negative",
          y: 42.1,
        },
        {
          name: "Neutral",
          y: 27.7,
        },
        {
          name: "Positive",
          y: 25.5,
        },
        {
          name: "Very Positive",
          y: 0.8,
        },
      ],
    },
  ],
};

export default function SocialMedia() {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
  return (
    <div className="container fixed_header_margintop" style={{padding:"0rem 0 1rem",padding: "30px 0 57px"}}>
    <div className="res_title">
        <h3>
          We classify the sentiments of the articles where the concerned brand name has appeared. Using our propriety 
          NLP algorithm, we are able to quantify the sentiments that act as a brand indicator.
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
          <BajajChart options={chartOptions} highcharts={Highcharts} />
          <div style={{textAlign:"center",padding:"2rem 0"}}>Total number of articles analysed: 2952</div>
          <div className="social_button_div">
          <Link to="/insight/statistics/retail_chart4"><img src={left} alt="right_button"/></Link>
          <Link to="/insight/statistics/retail_chart6"> <img style={{transform: "rotateY(178deg)"}} src={left} alt="right_button"/></Link>
         </div>
        
        
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <div className="right_chart_info">
        <div className="bind_div_com">
          <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{socialmedia.date}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{socialmedia.region}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{socialmedia.time}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{socialmedia.Notes}</span>
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
  );
}