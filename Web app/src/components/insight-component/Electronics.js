import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import { Link } from "react-router-dom";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import {electronics} from "./ChartInfo";
// Import our demo components
import ElectronicsChart from "./chart-components/ElectronicsChat";

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
  chart: {
    height: 550,
    type: "line"
  },
  title: {
    text: "City wise average consumer expenditure chart"
  },
  xAxis: {
    categories: [
      "Ahmedabad",
      "Bangalore",
      "Chennai",
      "Delhi",
      "Gurgaon",
      "Hyderabad",
      "Kolkata",
      "Mumbai",
      "Noida",
      "Pune"
    ],
    title: {
      text: "City"
    }
  },
  yAxis: {
    title: {
      text: "Average Consumer Expenditure"
    }
  },
  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:.1f}</b><br/>',
    shared: false
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: false
      },
      enableMouseTracking: true
    }
  },
  series: [
    {
      name: "Mens Footwear",
      data: [
        4842.536229,
        4833.777999,
        4827.813107,
        4844.140685,
        4842.839628,
        4833.609621,
        4851.914671,
        4856.458121,
        4841.096949,
        4858.538928
      ]
    },
    {
      name: "Watches",
      data: [
        4880.106941,
        4933.935402,
        4948.788644,
        4916.664324,
        4896.283804,
        4954.281083,
        4861.650442,
        4891.882885,
        4920.574947,
        4887.31832
      ]
    },
    {
      name: "Ethnic",
      data: [
        5291.291904,
        5156.571864,
        5290.589541,
        5233.253114,
        5235.974316,
        5277.514549,
        5221.444196,
        5273.748921,
        5243.100166,
        5267.943665
      ]
    },
    {
      name: "Sun glasses",
      data: [
        5071.218641,
        5076.928896,
        5071.468778,
        5064.655067,
        5091.726882,
        5047.108602,
        5073.191731,
        5063.532477,
        5079.359811,
        5048.650458
      ]
    },
    {
      name: "Bags",
      data: [
        4820.59318,
        4775.562011,
        4773.854619,
        4798.783482,
        4773.971481,
        4778.977135,
        4825.749483,
        4818.086263,
        4783.632653,
        4815.757319
      ]
    },
    {
      name: "Women Footwear",
      data: [
        4911.54459,
        4893.556713,
        4867.911034,
        4907.430493,
        4865.625241,
        4886.051597,
        4958.218801,
        4932.652354,
        4920.154696,
        4939.14481
      ]
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
            Different cities have a bit of variation in the way they spend their money on e-commerce categories. Brands 
            and retailers can take a sneak-peak on the spending patterns.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-9 col-sm-9 col-12">
          <ElectronicsChart options={chartOptions} highcharts={Highcharts} />
          <div className="topapp_button_div" >
          <Link to="/insight/statistics/retail_chart3"><img  style={{paddingTop:"50px"}} src={left} alt="right_button"/></Link>
          <Link to="/insight/statistics/retail_chart5"> <img style={{transform: "rotateY(178deg)", paddingRight: "525px", paddingTop: "50px"}} src={left} alt="right_button"/></Link>
           </div>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-3 col-12">
          <div className="right_chart_info">
          <div className="bind_div_com">
            <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{electronics.date}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{electronics.region}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{electronics.time}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{electronics.Notes}</span>
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