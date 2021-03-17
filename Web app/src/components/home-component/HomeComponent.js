import React from "react";
import {Helmet} from "react-helmet";
import About from "./about-dataAnalytics/About"
import Content from "../home-component/content/Content";
import Animation from "../home-component/animation/AnimationImg";
import Solution from "../home-component/OurSolution/Solution";
import Technology from "../home-component/technology/Technology";
import LeftContent from "./left-content/LeftContent";
import RightContent from "./right-content/RIghtContent"
import Estimate from "./estimate/Card";
import Description from "./data-analytics-description/Description";
import Contact from "../../common-components/contact-component/Contact"
import {LeftContent1} from "../home-component/Sectiondata";
import {LeftContent2} from "../home-component/Sectiondata";
import {RightContent1} from "../home-component/Sectiondata";
import {RightContent2} from "../home-component/Sectiondata";
import HomeCards from "./home-cards/HomeCards";

export default function HomeComponent() {
  return (
    <div style={{fontFamily:"Poppins", marginTop:"6rem"}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Air Recog. - The future is here</title>
        <meta name="description" content="Air Recognition is a platform that aims to reduce the distance between the virtual and the physical worlds.
      Our next-gen technology enables our users to sketch out their ideas
      and see them on a virtual board." />
      </Helmet>
      <Content />
      <Description/>
      {/* <About/> */}
      {/* <Animation /> */}
      {/* <Solution /> */}
      {/*  <LeftContent data={LeftContent1}/> */}
      {/* <Technology /> */}
      {/*  <RightContent data={RightContent1} code={false}/>
      <LeftContent data={LeftContent2}/>
      <RightContent data={RightContent2} code={true}/> */}
      <HomeCards/>
      <Estimate />
      {/* <Contact link={"https://us7.list-manage.com/contact-form?u=c45b4435fa81fc45d23ed7254&form_id=6313ebab993ba9105ee068628885d91f"}/> */}
      {/* <div class="mobile-chairman-message-style">
        <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <div class="chairmen-mobile-images">
                        <img src="D:\datalytix_website\web development 2\Datalytix\front-end\public\logo512.png" alt="" />
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="name-span2">D.K Goel </span>
                    <p style={{paddingTop: "0px", class:"short-n-chairmen"}}>
                        <b><i>&mdash; Founder Chairman & Chief Mentor</i></b></p>
                    <p class="ch-mobile">
                        Every moment in life is a fresh beginning. That brings with it the boundless joy
                        of new possibilities. And the pleasure is compounded when you know, you are about
                        to realize a lofty goal.
                        <br />
                        Since the time we began in 1992, we have constantly strived for excellence....
                    </p>
                    <a href="Chairman-Message" id="A131" title="About Fiitjee" class="learnmore-m">
                        &mdash; Learn More</a>
                </td>
            </tr>
        </table>
    </div> */}
    </div>
  );
}
