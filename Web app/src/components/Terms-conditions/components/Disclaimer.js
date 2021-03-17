import React from "react";

const Disclaimer = () => {
  return (
    <div className="container">
      <div>
        <h1 className="priv_sub_h2">Disclaimer</h1>
      </div>
      <div className="priv_com priv_b1">
      <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
        <ul>
          <li style={{padding: "3px 0"}}>limit or exclude our or your liability for death or personal injury</li>
          <li style={{padding: "3px 0"}}>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li style={{padding: "3px 0"}}>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li style={{padding: "3px 0"}}>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
        <br/><br/>
        The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilitiesarising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
        <br/><br/>
        As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
      </div>
    </div>
  );
};
export default Disclaimer;
