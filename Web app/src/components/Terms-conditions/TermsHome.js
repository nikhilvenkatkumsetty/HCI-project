import React from "react";
import Banner from "./components/Banner";
import Cookies from "./components/Cookies";
import License from "./components/License";
import Links from "./components/Links";
import IFrames from "./components/IFrames";
import Content from "./components/Content";
import Privacy from "./components/Privacy";
import Reservation from "./components/Reservation";
import Removal from "./components/Removal";
import Disclaimer from "./components/Disclaimer";
import  "../../assets/styles/privacy/privacy-policy.scss"
const TermsHome = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      });
    return <div style={{marginTop: "6rem",background:"#F2F2F2",paddingTop: "49px", fontFamily: "Poppins"}}>
        <Banner/>
        <Cookies/>
        <License/>
        <Links/>
        <IFrames/>
        <Content/>
        <Privacy/>
        <Reservation/>
        <Removal/>
        <Disclaimer/>
    </div>
}
export default TermsHome