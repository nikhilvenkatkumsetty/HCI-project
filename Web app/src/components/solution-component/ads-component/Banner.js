import React from "react";
import Button from "../../../building-blocks/atoms/Button/Button";
import { Link } from "react-router-dom";
import "../../../assets/styles/solution-styles/SolutionStyles.scss";
import main from "../../../assets/images/solution-assests/ads-assests/banner.svg";
import Capture from "../../../assets/images/common-assets/Capture.png"
import { mainBannerData } from "./Mock";
export default function Banner() {
  return (
    <div className="container main_bannerComponent" style={{fontFamily:"Poppins"}}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 main_banner_data">
          {mainBannerData.map((item, i) => {
            return (
              <div>
                <div className="top_heading_wrap">
                <div style={{fontSize:"21px"}}>{item.heading}</div>
                <div class="border_ads_24 image"><img src={Capture} alt="capture" /></div>
                </div>
                <div className="banner_data_wrap">
                <div>{item.title}</div>
                <div>{item.subtitle}</div>
                <div><Link to="/demo"><button style={{borderRadius:"4px"}} className="demo-but">Give it a try!<span className="try_us_buttn"></span></button></Link></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 main_banner_img">
          <div>
            <img className="banner_image" src={main} alt="main" />
          </div>
        </div>
      </div>
    </div>
  );
}
