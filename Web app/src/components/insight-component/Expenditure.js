import React from "react";
import App from "./chart-components/customer-expenditure/App";
import { Link } from "react-router-dom";
import {expenditure} from "./ChartInfo";
import left from "../../assets/images/extra-constructs/left_arrow.png";

export default function Expenditure() {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
  return (
    <div className="container fixed_header_margintop" style={{padding:"0rem 0 1rem"}}>
    <div className="res_title">
        <h3>
          Non-metro cities buying capacity is different than the major metro areas. It varies based on 
          population, logistic infrastructures, promotions and online accessibility. 
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
         <div style={{border:"2px solid darkgrey",borderRadius:"5px"}}><App/></div>
         <div className="expenditure_button_div">
         <Link to="/insight/statistics/retail_chart5"><img style={{paddingTop:"50px"}} src={left} alt="right_button"/></Link>
         <Link to="/insight/statistics/media_chart1"> <img style={{transform: "rotateY(178deg)", paddingRight: "525px", paddingTop: "50px"}} src={left} alt="right_button"/></Link>
         </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <div className="right_chart_info">
        <div className="bind_div_com">
          <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{expenditure.date}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{expenditure.region}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{expenditure.time}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{expenditure.Notes}</span>
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