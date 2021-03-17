import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import "../../assets/styles/chart-styles/social_media.scss"
import {hindinews} from "./ChartInfo";
import { Link } from "react-router-dom";
const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: "Market Share of Hindi News Channels",
    align: "center"
    // verticalAlign: "middle",
    // y: -50
  },
  tooltip: {
    pointFormat: "<span>{series.name}</span>: <b>{point.percentage:.2f}%</b>"
  },
  accessibility: {
    point: {
      valueSuffix: "%"
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      showInLegend: true,
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.2f} %"
      },
      startAngle: -90,
      endAngle: 90,
      center: ["50%", "75%"],
      size: "110%"
    }
  },
  series: [
    {
      type: "pie",
      name: "Browser share",
      innerSize: "60%",
      data: [
        ["Aaj Tak", 14.26],
        ["India TV", 11.43],
        ["Republic Bharat", 16.4],
        ["TV9 Bharatvarsh", 10.92],
        ["News18 India", 9.88]
      ]
    }
  ]
};
class HindiNews extends React.Component {
    
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
            <Link to="/insight/statistics/media_chart2"><img src={left} alt="right_button"/></Link>
            <Link to="/insight/statistics/media_chart4"> <img style={{transform: "rotateY(178deg)"}} src={left} alt="right_button"/></Link>
           </div>
          
          
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <div className="right_chart_info">
          <div className="bind_div_com">
            <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{hindinews.date}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{hindinews.region}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{hindinews.time}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{hindinews.Notes}</span>
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
  export default HindiNews;


