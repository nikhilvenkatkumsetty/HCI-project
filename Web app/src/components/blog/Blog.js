import React from "react";
import {Helmet} from "react-helmet";
import pic1 from "../../assets/images/extra-constructs/3819454.jpg"
const Blog = () => {
    return <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Datalytix Blog - Thoughts | Technology | Culture</title>
          <meta name="description" content="Unravelling alternative data universe one piece at a time. Also, sneak peek into our engineering, technology and culture." />
        </Helmet>
        <div className="fixed_header_margintop" style={{width:"62vh",margin: "10% 36% 9%"}}>
            <img src={pic1} alt="under construction"/>
        </div>
        <div style={{position: "relative",  bottom: "120px"}}>
            <h3 style={{display: "flex",justifyContent: "center",color: "gray"}}>Webpage Under Construction.</h3>
        </div>
    </div>
}
export default Blog;