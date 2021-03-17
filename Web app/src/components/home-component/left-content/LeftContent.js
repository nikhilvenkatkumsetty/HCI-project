import React from "react";
import "../../../assets/styles/home-styles/left_content.scss";
import ScrollAnimation from "react-animate-on-scroll";
const LeftContent = (props) => {
  return (
    <div className=" padd_left_content">
   
      <div className="row">
      <div  className="col-lg-1 col-md-1" >

      </div>
        <div className="col-lg-6 col-md-6 ">
        <div className="left_pane_head">
        <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            duration={1}
            animateOnce={true}
            delay={0.5}
          >
            <h2 className="left_pane_head_h2">{props.data.header}</h2>
            <h2 className="mid_h2">{props.data.mid}</h2>
            </ScrollAnimation>

          </div>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={1}
            animateOnce={true}
            delay={0.5}
          >
          <div className="left_pane_text">
          <div>{props.data.text1}</div>
          <div>{props.data.text}</div>
          </div>
          </ScrollAnimation>
        </div>
        
        <div className="col-lg-4 col-md-4">
            <div>
            <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            duration={1.5}
            animateOnce={true}
            delay={0.5}
          >
                <img style={{paddingTop:"50px"}} src={props.data.pic} alt="1st"/>
                </ScrollAnimation>
            </div>
        </div>
        <div className="col-lg-1 col-md-1">

        </div>
        
      </div>
     
    </div>
  );
};
export default LeftContent;

