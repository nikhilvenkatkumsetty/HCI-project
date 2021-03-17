import React from "react";
import "../../assets/styles/solution-styles/SolutionStyles.scss";
import data from "../../assets/images/solution-assests/rti-assests/data.png";
import Capture from "../../assets/images/common-assets/Capture.png" 
export default function DataSource() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 datasource_container">
          <div className="datasource_head_wrap">
           <div>Data Sources</div>
           <div><img src={Capture} alt="source" /></div>
          </div>
          <div className="datasource_data">
          <ul>
          <li>Transaction Data </li>
          <li>Twitter and Social Media APIs</li>
          <li>Instagram Audience Outreach</li>
          <li>Surveys </li>
          <li>App Usage</li>
          <li>Location Data</li>
          <li>Footfall Indicators</li>
          <li>Micro Demographic details</li>
          </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-0 col-0 datasource_container_img">
          <div>
            <img src={data} alt="interest" />
          </div>
        </div>
      </div>
    </div>
  );
}
