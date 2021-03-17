import React from "react";

const CCPA = () => {
  return (
    <div className="container">
      <div>
        <h1 className="priv_sub_h2">
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </h1>
      </div>
      <div className="priv_com priv_b1">
        Under the CCPA, among other rights, California consumers have the right
        to:
      </div>
      <div className="priv_com priv_b2">
        Request that a business that collects a consumer's personal data
        disclose the categories and specific pieces of personal data that a
        business has collected about consumers.
        <br /> Request that a business delete any personal data about the
        consumer that a business has collected.
        <br />
        Request that a business that sells a consumer's personal data, not sell
        the consumer's personal data.
      </div>
      <div className="priv_com priv_b3">
        If you make a request, we have one month to respond to you. If you would
        like to exercise any of these rights, please contact us.
      </div>
    </div>
  );
};

export default CCPA;
