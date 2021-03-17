import React from "react";
import Banner from "./components/Banner";
import Consent from "./components/Consent";
import Information from "./components/Information";
import LogFiles from "./components/LogFiles";
import Cookies from "./components/Cookies";
import Advertising from "./components/Advertising";
import ThirdParty from "./components/ThirdParty";
import CCPA from "./components/CCPA";
import Children from "./components/Children";
import GDPR from "./components/GDPR";
import UseInfo from "./components/UseInfo"
import  "../../assets/styles/privacy/privacy-policy.scss"
const PrivacyHome = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      });
    return <div style={{marginTop: "6.4rem",background:"#F2F2F2",paddingTop: "49px"}}>
        <Banner/>
        <Consent/>
        <Information/>
        <UseInfo/>
        <LogFiles/>
        <Cookies/>
        <Advertising/>
        <ThirdParty/>
        <CCPA/>
        <GDPR/>
        <Children/>
    </div>
}
export default PrivacyHome