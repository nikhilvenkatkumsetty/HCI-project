// Home components goes in this folder..
import React from "react";
import "../../../assets/styles/home-styles/Category.scss";
// img
import pic1 from "../../../assets/images/home-assets/about/pic1.png";
import pic21 from "../../../assets/images/home-assets/about/pic21.png";
import pic22 from "../../../assets/images/home-assets/about/pic22.png";
import pic31 from "../../../assets/images/home-assets/about/pic31.png";
import pic32 from "../../../assets/images/home-assets/about/pic32.png";
import pic4 from "../../../assets/images/home-assets/about/pic4.png";

const About=()=> {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="about_wrapper">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <div className="about_headwrap">
        <div>Welcome to Air Recog.!</div>
      </div>
      <div className="container about_container">
        <div className="row about_row">
          <div className="about_rowDiv">
            <div className="about_content">
              Making sense and extracting{" "}
              <span className="about_content_pink">contextual</span> information
              from billions of devices, petabytes of texts, images, and video
              data is <span className="about_content_blue">daunting</span> and
              <span className="about_content_blue"> expensive</span>!
            </div>
            <div>
              <img src={pic1} alt="pic1" />
            </div>
          </div>
          <div className="about_rowDiv second_block">
            <div>
              <img src={pic21} alt="pic1" />
            </div>
            <div className="about_content">
              Making sense and extracting{" "}
              <span className="about_content_pink">contextual</span> information
              from billions of devices, petabytes of texts, images, and video
              data is <span className="about_content_blue">daunting</span> and
              <span className="about_content_blue"> expensive</span>!
            </div>
            <div>
              <img src={pic22} alt="pic1" />
            </div>
          </div>
          <div className="about_rowDiv third_block">
            <div>
              <img src={pic31} alt="pic1" />
            </div>
            <div className="about_content">
              Making sense and extracting{" "}
              <span className="about_content_pink">contextual</span> information
              from billions of devices, petabytes of texts, images, and video
              data is <span className="about_content_blue">daunting</span> and
              <span className="about_content_blue"> expensive</span>!
            </div>
            <div>
              <img src={pic32} alt="pic1" />
            </div>
          </div>
          <div className="about_rowDiv fourth_block">
            <div>
              <img src={pic4} alt="pic1" />
            </div>
            <div className="about_content">
              Making sense and extracting{" "}
              <span className="about_content_pink">contextual</span> information
              from billions of devices, petabytes of texts, images, and video
              data is <span className="about_content_blue">daunting</span> and
              <span className="about_content_blue"> expensive</span>!
            </div>
          </div>
        </div>
      </div>
      </meta>
    </div>
  );
}

export default About;