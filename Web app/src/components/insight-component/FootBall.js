import React from "react";
import App from "./chart-components/football-chart/App";
import { Link } from "react-router-dom";
import {footfall} from "./ChartInfo";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import "../../assets/styles/chart-styles/footfall.scss"
export default function FootBall() {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
  return (
    <div className="container fixed_header_margintop" style={{padding:"0rem 0 1rem"}}>
    <div className="res_title">
        <h3>
          Footfall and prospects insights are calculated using analymized mobile location pings. For a major brand stores, 
          we have included possible prospects on a single day based on the visits in the vicinity and their idenitity profiles.
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
         <div ><App/></div>
         <div className="footfall_button_div">
         <Link to="/insight/statistics/retail_chart2"><img src={left} alt="right_button"/></Link>
         <Link to="/insight/statistics/retail_chart4"> <img style={{transform: "rotateY(178deg)"}} src={left} alt="right_button"/></Link>
         </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <div className="right_chart_info">
        <div className="bind_div_com">
          <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{footfall.date}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{footfall.region}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{footfall.time}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{footfall.Notes}</span>
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