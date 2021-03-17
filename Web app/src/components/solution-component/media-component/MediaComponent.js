import React from "react";
import {Helmet} from "react-helmet";
import "../../../assets/styles/solution-styles/SolutionStyles.scss"
import Banner from "./Banner"
import Category from "./Category"
import CardData from "./CardData"
import DataSource from "../../../common-components/datasource-component/DataSource"
import Contact from "../../../common-components/contact-component/Contact"
export default function MediaComponent(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    return(
        <div className="fixed_header_margintop" style={{marginTop:"6rem"}}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Datalytix | Media - Capture Important Stories</title>
                <meta name="description" content="Datalytix helps media houses to capture breaking news, keep a tab on events from social media, curate effective stories through blogs/forum and measure ads RoI." />
        </Helmet>
        <Banner/>
        <Category/>
        <CardData/>
        {/* <DataSource/> */}
        <Contact/>
        </div>
    )
}