import React from "react";
import {Helmet} from "react-helmet";
import "../../../assets/styles/solution-styles/SolutionStyles.scss"
import Banner from "./Banner"
import Category from "./Category"
import CardData from "./CardData"
import DataSource from "../../../common-components/datasource-component/DataSource"
import Contact from "../../../common-components/contact-component/Contact"
export default function TravelComponent(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    return(
        <div style={{marginTop:"6rem"}}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Datalytix | Travel - Enrich your Travel Products</title>
                <meta name="description" content="Datalytix helps hospitality industries figure out globetrotters' interest, demographic details, topic-trend which is helpful for unique product offerings." />
            </Helmet>
        <Banner/>
        <Category/>
        <CardData/>
        {/* <DataSource/> */}
        <Contact/>
        </div>
    )
}