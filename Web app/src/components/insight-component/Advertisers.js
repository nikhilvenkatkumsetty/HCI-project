import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import { Link } from "react-router-dom";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import {advertisers} from "./ChartInfo";
// Import our demo components
import AdvertisersChart from "./chart-components/Advertiserchart";

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
  chart: {
    height: 550,
    type: "column"
  },
  title: {
    text: "Top 10 Advertisers across genre in India"
  },

  xAxis: {
    title: {
      text: "Advertisers"
    },
    categories: [
      "Hindustan Lever LTD",
      "Reckitt Benckiser India LTD",
      "ITC LTD",
      "Godrej Consumer Products LTD",
      "Cadbury India LTD",
      "Procter & Gamble",
      "Ponds",
      "Colgate Palmolive India LTD",
      "Procter & Gamble Home Products",
      "Coca Cola India LTD"
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: "Weekly Insertions"
    },
    labels: {
      enabled: false
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y} k</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        crop: false,
        format: "<span>{point.y} k</span>",
        overflow: "none"
      }
    }
  },
  series: [
    {
      name: "Weekly Insertions",
      data: [257.0, 199.9, 48.7, 45.4, 39.9, 38.8, 38.5, 31.4, 22.5, 17.9],
      showInLegend: false,
      color: "#434348"
    }
  ]
};

export default function Advertisers() {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
  return (
    <div className="container fixed_header_margintop" style={{ padding: "0.25rem 0 3rem" }}>
    <div className="res_title">
        <h3>
          Weekly insertion on Indian television as measured by BARC (Broadcast Audience Research Council) India. This gives an idea about how
          different brands are investing in their marketing budget for their product.
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-9 col-sm-9 col-12">
        <AdvertisersChart options={chartOptions} highcharts={Highcharts} />
        <div className="topapp_button_div" >
        <Link to="/insight/statistics/media_chart3"><img  style={{paddingTop:"50px"}} src={left} alt="right_button"/></Link>
        <Link to="/insight/statistics/advertising_chart2"> <img style={{transform: "rotateY(178deg)", paddingRight: "525px", paddingTop: "50px"}} src={left} alt="right_button"/></Link>
         </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-3 col-12">
        <div className="right_chart_info">
        <div className="bind_div_com">
          <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{advertisers.date}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{advertisers.region}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{advertisers.time}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{advertisers.Notes}</span>
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