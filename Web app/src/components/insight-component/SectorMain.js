import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import "../../assets/styles/chart-styles/social_media.scss"
import {sector} from "./ChartInfo";
import { Link } from "react-router-dom";
// Import our demo components
import Chart from "./chart-components/Sector";

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
  chart: {
    // Height can be adjusted here
    height: 650,
    type: "bar"
  },
  title: {
    text: "Ad volume categorized by sectors"
  },

  xAxis: {
    title: {
      text: ""
    },
    categories: [
      "Personal Care/Personal Hygene",
      "Food and beverages",
      "Services",
      "Personal Healthcare",
      "Hair care",
      "Household Products",
      "Laundry",
      "Education",
      "Auto",
      "Building/Industrial/Land Equipments",
      "Banking/Finance/Investments",
      "Personal Accessories",
      "Corporate/Brand Image",
      "Agriculture",
      "Telecom/Internet Services",
      "Telecom Products",
      "Durables",
      "Retail",
      "Media",
      "Babycare"
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: "Ad volume (Mn Seconds)"
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
      pointWidth: 7
    },
    bar: {
      pointPadding: 0.4,
      borderWidth: 0
      // dataLabels: {
      //   style: {
      //     fontSize: "7px"
      //   },
      //   enabled: true,
      //   crop: false,
      //   overflow: "none"
      // }
    }
  },
  series: [
    {
      name: "2018",
      data: [
        72,
        62,
        48,
        23,
        23,
        25,
        13,
        5,
        19,
        11,
        9,
        10,
        3,
        2,
        4,
        4,
        7,
        6,
        2,
        3
      ]
    },
    {
      name: "2019",
      data: [
        66,
        64,
        42,
        21,
        24,
        26,
        19,
        8,
        19,
        11,
        8,
        9,
        1,
        2,
        3,
        4,
        7,
        6,
        3,
        3
      ]
    },
    {
      name: "2020",
      data: [
        81,
        70,
        42,
        32,
        27,
        26,
        19,
        14,
        12,
        9,
        8,
        5,
        4,
        4,
        4,
        3,
        3,
        3,
        2,
        1
      ]
    }
  ]
};

// Render app with demo chart
const SectorMain = () => {
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
        <div>
        <Chart options={chartOptions} highcharts={Highcharts} />

        </div>
        
 
          <div className="social_button_div">
          <Link to="/insight/statistics/advertising_chart3"><img src={left} alt="right_button"/></Link>
          <Link to="/insight/statistics/advertising_chart5"> <img style={{transform: "rotateY(178deg)"}} src={left} alt="right_button"/></Link>
         </div>
        
        
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <div className="right_chart_info">
        <div className="bind_div_com">
          <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{sector.date}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{sector.region}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{sector.time}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{sector.Notes}</span>
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


export default SectorMain;