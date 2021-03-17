import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom"
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "../../assets/styles/insight-styles/Insight.scss";
import { insightItem1, insightItem2, insightItem3 } from "./InsightDropData1";
import pic1 from "../../assets/images/common-assets/report (1).svg";
// import banner from "../../assets/images/solution-assests/ads-assests/banner.png";

export default function InsightDrop1() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Datalytix | Statistics - Industry Specific Interesting Plots</title>
          <meta name="description" content="Some really interesting trends and insights from our AI engine which could be useful to a breadth of users across industries. Updated periodically." />
      </Helmet>
      <div className="container App fixed_header_margintop" style={{marginTop:"6rem"}}>
      <div className="insightdrop1_heading">
        As our AI engine processes a large number of signals daily, we do find some really interesting
        trends and insights that can be useful to a breadth of users across industries. We are trying 
        to catalogue and segment these under different industries for easier information grasp. This space 
        will be dynamic and realize the addendum based on the latest trends, news cycles, and data updates. 
        We encourage the site visitors to contact us if they need to purchase the premium version of specific 
        charts, graphs or similar insights for other geographies.
      </div>
        <Tabs defaultTab="vertical-tab-one" vertical>
          <TabList className="mob_tablist">
            <div className="tabs mob_tab1"><Tab tabFor="vertical-tab-one">Retail </Tab></div>
            <div className="tabs" ><Tab tabFor="vertical-tab-two">Media </Tab></div>
            <div className="tabs"><Tab tabFor="vertical-tab-three">Advertising </Tab></div>
          </TabList>
          <TabPanel tabId="vertical-tab-one">
            <div className="row tab1row">
              <div className="col-lg-9 col-md-9 col-sm-12 col-12 tabcol1">
                <div>
                  {insightItem1.map((item, i) => {
                    return (
                        <Link to={item.Link}>
                        <div className="element_retail">{item.title}</div>
                        </Link>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-3 col-md-9 col-sm-12 col-12 tabcol2">
                <div>
                  <Link to="/insight/reports"><img src={pic1} alt="no_img" /></Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel tabId="vertical-tab-two">
            <div className="row tab1row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12 tabcol1">
            <div>
              {insightItem2.map((item, i) => {
                return (
                    <Link to={item.Link}>
                    <div className="element_retail">{item.title}</div>
                    </Link>
                );
              })}
            </div>
          </div>
              <div className="col-lg-3 col-md-9 col-sm-12 col-12 tabcol2">
                <div>
                <Link to="/insight/reports"><img src={pic1} alt="no_img" /></Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel tabId="vertical-tab-three">
            <div className="row tab1row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12 tabcol1">
            <div>
              {insightItem3.map((item, i) => {
                return (
                    <Link to={item.Link}>
                    <div className="element_retail">{item.title}</div>
                    </Link>
                );
              })}
            </div>
          </div>
              <div className="col-lg-3 col-md-9 col-sm-12 col-12 tabcol2">
                <div>
                <Link to="/insight/reports"><img src={pic1} alt="no_img" /></Link>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}