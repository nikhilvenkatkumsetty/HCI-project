import React from "react";
// Import Highcharts
import Highcharts from "highcharts";
import { Link } from "react-router-dom";
// Import our demo components
import SupermarketChart from "./chart-components/SupermarketChart";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import "../../assets/styles/chart-styles/super_market.scss"
import {supermarket} from "./ChartInfo";

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
    chart: {
      type: "column"
    },
    title: {
      text: "Total Reliance-retail/D-mart stores by location"
    },
  
    xAxis: {
      title: {
        text: "Cities"
      },
      categories: [
        "Delhi",
        "Bangalore",
        "Pune",
        "Kolkata",
        "Ahmedabad",
        "Chennai",
        "Mumbai"
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "Count"
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
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: "Dmart",
        data: [3, 14, 13, 0, 17, 1, 7]
      },
      {
        name: "Reliance Trends",
        data: [13, 50, 9, 19, 10, 35, 22]
      },
      {
        name: "Reliance Fresh",
        data: [21, 50, 10, 12, 11, 29, 7]
      }
    ]
  };

  
export default function Supermarket() {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
  return (
    <div className="container fixed_header_margintop" style={{padding:"0rem 0 1rem"}}>
    <div className="res_title">
        <h3>
          Leading supermarket presence in different cities signifies the maturity of the region, formal
          economy presence and the prospect of similar businesses.
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-9 col-sm-9 col-12">
        <SupermarketChart options={chartOptions} highcharts={Highcharts} />
        <div className="supermarket_button_div">
        <Link to="/insight/statistics/retail_chart1"><img src={left} alt="right_button"/></Link>
        <Link to="/insight/statistics/retail_chart3"> <img style={{transform: "rotateY(178deg)"}} src={left} alt="right_button"/></Link>
         </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-3 col-12">
        <div className="right_chart_info">
        <div className="bind_div_com">
          <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{supermarket.date}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{supermarket.region}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{supermarket.time}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{supermarket.Notes}</span>
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