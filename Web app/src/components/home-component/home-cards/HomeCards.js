import React from "react";
import "../../../assets/styles/solution-styles/SolutionStyles.scss";
import { HomeData } from "../Sectiondata";
import ScrollAnimation from "react-animate-on-scroll";
export default function s() {
  return (
    <div className="container homecard_container">
      <div style={{padding:"0"}} class="card-groups vgr-cards">
        {HomeData.map((item, i) => {
          return (
            <div class="card">
              <div class="card-img-body version_24" style={{margin: "auto"}}>
                <ScrollAnimation
                  animateIn="fadeIn"
                  animateOut="fadeOut"
                  duration={1}
                  animateOnce={true}
                  delay={0.5}
                >
                  <img class="card-img" src={item.pic} alt="Cardimage cap" style={{margin: "auto"}}/>
                </ScrollAnimation>
              </div>
              <div class="card-body">
                <div className="carddata_content">
                  <div className="left_pane_head">
                    <ScrollAnimation
                      animateIn="fadeIn"
                      animateOut="fadeOut"
                      duration={1}
                      animateOnce={true}
                      delay={0.5}
                    >
                      <h2
                        className="left_pane_head_h2"
                        style={{ paddingTop: "50px", fontSize: "40px" }}
                      >
                        {item.header}
                      </h2>
                      <h2 className="mid_h2" style={{ paddingTop: "5px", fontSize: "30px" }}>
                        {item.mid}
                      </h2>
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
                      <div style={{ paddingTop: "-50px", fontSize: "18px" }}>{item.text1}</div>
                      <div style={{ paddingTop: "-50px", fontSize: "18px" }}>{item.text}</div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
