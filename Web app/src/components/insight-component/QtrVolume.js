import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import "../../assets/styles/chart-styles/social_media.scss"
import {qtrvolume} from "./ChartInfo";
import { Link } from "react-router-dom";
// Import our demo components
import Chart from "./chart-components/Volume";

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
  chart: {
    type: "column"
  },
  title: {
    text: "Advertisement volume broadcasted on Indian channels"
  },

  xAxis: {
    title: {
      text: ""
    },
    categories: ["Q1 Jan to Mar", "Q2 Apr to Jun", "Q3 July to Sep"],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: "Qtr on Qtr Ad volume (Mn Seconds)"
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y}</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true
  },
  plotOptions: {
    series: {
      pointWidth: 30
    },
    column: {
      pointPadding: 0.4,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        crop: false,
        overflow: "none"
      }
    }
  },
  series: [
    {
      name: "2018",
      data: [381, 414, 401]
    },
    {
      name: "2019",
      data: [378, 398, 379]
    },
    {
      name: "2020",
      data: [369, 273, 398]
    }
  ]
};

// Render app with demo chart
const QtrVolume = () => {
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
          <Link to="/insight/statistics/advertising_chart4"><img src={left} alt="right_button"/></Link>
          <Link to="/insight/statistics/advertising_chart5"> <img style={{transform: "rotateY(178deg)"}} src={left} alt="right_button"/></Link>
         </div>
        
        
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <div className="right_chart_info">
        <div className="bind_div_com">
          <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{qtrvolume.date}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{qtrvolume.region}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{qtrvolume.time}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{qtrvolume.Notes}</span>
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
export default QtrVolume;


