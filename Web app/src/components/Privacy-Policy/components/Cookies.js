import React from "react";

const Cookies = () => {
  return (
    <div className="container">
      <div>
        <h1 className="priv_sub_h2">Cookies and Web Beacons</h1>
      </div>
      <div className="priv_com priv_b1">
        Like any other website, Air Recog. uses 'cookies'. These cookies are used
        to store information including visitors' preferences, and the pages on
        the website that the visitor accessed or visited. The information is
        used to optimize the users' experience by customizing our web page
        content based on visitors' browser type and/or other information.
      </div>
      <div className="priv_com priv_b2">
        For more general information on cookies, please read <a
          target="blank"
          style={{ color: "#90E5F2" }}
          href="https://www.cookieconsent.com/what-are-cookies/"
        >
          "What Are Cookies"
        </a>
      </div>
      
    </div>
  );
};

export default Cookies;
