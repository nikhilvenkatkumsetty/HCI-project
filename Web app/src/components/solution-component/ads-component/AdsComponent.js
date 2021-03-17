import React from "react";
import {Helmet} from "react-helmet";
import "../../../assets/styles/solution-styles/SolutionStyles.scss"
import Banner from "./Banner"
import Category from "./Category"
import CardData from "./CardData"
import DataSource from "../../../common-components/datasource-component/DataSource"
import Contact from "../../../common-components/contact-component/Contact"
export default function AdsComponent(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    return(
        <div className="fixed_header_margintop" style={{marginTop:"6rem"}}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Datalytix | Advertising - Drive Real Engagement</title>
                <meta name="description" content="Datalytix helps you to find target groups, measure brand outreach, understand OOH advertising metrics and help effectively allocate your marketing spend." />
        </Helmet>
        <Banner/>
        <Category/>
        <CardData/>
        {/* <DataSource/> */}
        <Contact/>
        </div>
    )
}