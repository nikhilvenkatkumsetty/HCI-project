import React from 'react';

import Highcharts from 'react-highcharts';
import left from "../../assets/images/extra-constructs/left_arrow.png";
import "../../assets/styles/chart-styles/social_media.scss"
import {topappsIOS} from "./ChartInfo";
import { Link } from "react-router-dom";


function IosMain() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  const config = {
    chart: {
      type: 'bar',
      height: 450,
    },
    title: {
      text: 'News and media top apps by usage penetration (iOS)',
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
        'Twitter',
        'Times Of India',
        'ABP Live News',
        'NDTV',
        'Inshorts',
        'Flipboard',
        'Quora',
        'Dailyhunt',
        'Narendra Modi App',
        'The Economic Times',
      ],
      tickLength: 0,
      lineWidth: 1,
    },
    yAxis: {
      visible: false,
    },
    // colors: ['#FF7011', '#9AAABB'],
    plotOptions: {
      series: {
        pointPadding: 0,
      },
    },
    series: [{ showInLegend: false, data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] }],
  };
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
          <div style={{border:"2px solid darkgrey",borderRadius:"5px"}}>
          <Highcharts config={config} />
  
          </div>
          
   
            <div className="social_button_div">
            <Link to="/insight/statistics/media_chart1"><img src={left} alt="right_button"/></Link>
            <Link to="/insight/statistics/media_chart3"> <img style={{transform: "rotateY(178deg)"}} src={left} alt="right_button"/></Link>
           </div>
          
          
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <div className="right_chart_info">
          <div className="bind_div_com">
            <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{topappsIOS.date}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{topappsIOS.region}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{topappsIOS.time}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{topappsIOS.Notes}</span>
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


export default IosMain;

