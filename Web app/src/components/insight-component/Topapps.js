import React,{useState} from 'react';
import Highcharts from "highcharts";
import { Link } from "react-router-dom";
import TopappsChart from "./chart-components/TopappsChart";

import left from "../../assets/images/extra-constructs/left_arrow.png";
import './topapps_styles.css';
import {topapps} from "./ChartInfo";

require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
    chart: {
      type: 'bar',
      height: 450,
    },
    title: {
      text: 'News and media top apps by usage penetration (Android)',
    },
    tooltip: {
      enabled: false,
      useHtml: true,
      format: <h1>Hi</h1>,
    },
    legends: {
      display: false,
    },
    xAxis: {
      categories: [
        'Dailyhunt',
        'Quora',
        'Google News',
        'Inshorts',
        'Times of India',
        'Public (Indian Local videos)',
        'Briefing',
        'The Economic times',
        'Dainik Bhaskar',
        'India News',
      ],
      tickLength: 0,
      lineWidth: 1,
    },
    yAxis: {
      visible: false,
    },
    colors: ['#90ED7D'],
    plotOptions: {
      series: {
        pointPadding: 0,
      },
    },
    series: [{ showInLegend: false, data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] }],
  };

export default function Topapps() {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
  return (
    <div className="container fixed_header_margintop" style={{ padding: "0.25rem 0 3rem" }}>
    <div className="res_title">
        <h3>
          Indian mobile users have a plethora of app options through which they access the news and events. The insights 
          might help the brands and businesses to concentration their platform of choice for information dissemination.
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-9 col-sm-9 col-12">
        <TopappsChart options={chartOptions} highcharts={Highcharts} />
        <div className="topapp_button_div" >
        <Link to="/insight/statistics/retail_chart6"><img  src={left} alt="right_button"/></Link>
        <Link to="/insight/statistics/media_chart2"> <img style={{transform: "rotateY(178deg)", paddingRight: "525px"}} src={left} alt="right_button"/></Link>
         </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-3 col-12">
        <div className="right_chart_info">
        <div className="bind_div_com">
          <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{topapps.date}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{topapps.region}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{topapps.time}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{topapps.Notes}</span>
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