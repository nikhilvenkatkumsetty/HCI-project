import React from "react";
// import Button from "../../building-blocks/atoms/Button/Button";
import Pic1 from "../../assets/images/header-assets/shopping-cart.svg"
import Pic2 from "../../assets/images/header-assets/newspaper.svg"
import Pic3 from "../../assets/images/header-assets/bfsi2.svg"
import "./module-demo.scss"
import { Link } from "@material-ui/core";
export default function ModulesDemo() {
  return (
    <div className="container" style={{padding:"20rem 0px 20rem"}}>
      <div className="row" style={{height:"118px"}}>
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 butt_com">
          <button className="demo_retail"><span><a href="https://morning-sea-11632.herokuapp.com/"><img src={Pic1} alt="pic1"/></a></span><br/><span className="comm_demo_span"><a style={{color:"white"}} href="https://morning-sea-11632.herokuapp.com/">RETAIL</a></span></button>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 butt_com">
        <button className="demo_media"><span><a href="https://morning-sea-11632.herokuapp.com/"><img src={Pic2} alt="pic1"/></a></span><br/><span className="comm_demo_span"><a style={{color:"white"}} href="https://morning-sea-11632.herokuapp.com/">MEDIA</a></span></button>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 butt_com">
        <button className="demo_advertising" onClick="/"><span><a href="https://morning-sea-11632.herokuapp.com/"><img src={Pic3} alt="pic1"/></a></span><br/><span className="comm_demo_span"><a style={{color:"white"}} href="https://morning-sea-11632.herokuapp.com/">ADVERTISING</a></span></button>
        </div>
      </div>
    </div>
  );
}