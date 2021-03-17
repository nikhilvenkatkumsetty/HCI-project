import React from "react";
import "../../../assets/styles/solution-styles/SolutionStyles.scss";
import { cardData } from "./Mock";
import ScrollAnimation from "react-animate-on-scroll";
export default function CardData() {
  return (
    <div className="container card_container">
      <div class="card-groups vgr-cards">
        {cardData.map((item, i) => {
          return (
            <div class="card">
              <div class="card-img-body">
              <ScrollAnimation
                  animateIn="fadeIn"
                  animateOut="fadeOut"
                  duration={1}
                  animateOnce={true}
                  delay={0.5}
                >
                <img class="card-img" src={item.img} alt="Cardimage cap" />
                </ScrollAnimation>
              </div>
              <div class="card-body">
                <div className="carddata_content">
                  <div>{item.title}</div>
                  <ScrollAnimation
                    animateIn="bounceInRight"
                    animateOut="fadeOut"
                    duration={1}
                    animateOnce={true}
                    delay={0.5}
                  >
                  <div style={{fontSize:"18px"}}>{item.data}</div>
                  </ScrollAnimation>
                  <div></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
