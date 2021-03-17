import React, { useState } from "react";
import {Helmet} from "react-helmet";
import report from "../report/India_2030.pdf";
import Pic from "../../assets/images/report/report.JPG";
import image from "../../assets/images/report/razorpay.JPG";

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-scroll";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

// import ScriptTag from 'react-script-tag';
import "./Report.css";


const Report = () => {
  
  const [download,setDownload]=useState(false);
  const [payment,setPayment]=useState(true);
  const [open,setopen] =useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const openCheckout=() =>{
    let options = {
      "key": "rzp_live_LUEqZLPAPeWSId",
      //"key": "rzp_test_iYDyQvt41W8b78",
      "amount": 50000, // 50000 paise = INR 500, amount in paisa
      "name": "Datalytix",
      "handler": function (response){
        // alert(response.razorpay_payment_id)
        if(response.razorpay_payment_id!=null){
          setDownload(true);
          setPayment(false);
        }
				// console.log(response.razorpay_order_id)
				// console.log(response.razorpay_signature)
      }
    };
    
    let rzp = new window.Razorpay(options);
    rzp.open();
  }
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return (<div className="fixed_header_margintop">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Datalytix | Reports - Research and Analysis</title>
          <meta name="description" content="Periodic publications of general/industry-specific reports through ingesting of large-scale signals by our AI engines. Provided free of cost to our clients!" />
      </Helmet>
        <div className="container" style={{padding:"0rem 10px 5rem"}}>
        <div className="row report_row">
        <div onClick={()=>{setopen(true)}} className="butt_com">
              <div className="report">
              <div>
                <img className="image1" style={{ paddingTop:"0px", paddingRight: "0px", height: "350px",  width: "400px",    border: "2px solid #A42051",    borderRadius: "5px"}} src={Pic} alt="report"/>
                </div>               
                <div>
                <br/>
                <div  style={{color:"white" }}><span>The report of India 2030</span></div>
                 <div className="report_form"> 
                 </div>
                 </div>
                 <br/>
                 
                 <div>
                   {/* <form>
                   <ScriptTag type="text/javascript" src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_GBDNcfgrpyrosx"></ScriptTag>
                </form>              */}
                   <form>
                  {payment&&(<img onClick={openCheckout} src={image} style={{height:"40px", width:"170px", borderRadius:"3px",border:"0.5px solid #0d0154"}}></img>)
                  // <button type="button" className="payment" style={{backgroundImage:{image} }} onClick={openCheckout} target ="_blank">Pay here</button>)
                }</form>
                 </div>
                 { download&&(<a href={report} style={{color:"white"}} target="_blank" download>Download</a>)}
                 </div> 
                 
        </div>       
      </div>
      

      <div><ListItem
                button
                spy
                style={{outline:"none"}}
                smooth
                offset={-350}
                component={Link}
                to="1"
                key="1"
              ><div onClick={()=>{setopen(true)}}  class="button_rep" id="button-2">
    <div id="slide"></div>
    <a className="report_but_text" href="#">Details</a>
  </div></ListItem></div>

      {open ? <div id="1">
        <div className="accordian_report">
      <Accordion className="accordian_report_box" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          style={expanded==='panel1'?{background:"#2E4372",color: "white",borderRadius: "3px"}:{background:"lightgrey",border: "3px solid #A42051",borderRadius: "4px",marginBottom:"8px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="accordian_box_title">1. General overview</Typography>
          {/* <Typography className="">I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails  className="accordian_box_text">
          <Typography className="accordian_inner_text">
            The report draws a picture of growth trajectory for India in the decade of 2020s.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian_report_box" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          style={expanded==='panel2'?{background:"#2E4372",color: "white",borderRadius: "3px"}:{background:"lightgrey",border: "3px solid #A42051",borderRadius: "4px",marginBottom:"8px" }}
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="accordian_box_title">2. What it contains?</Typography>
          {/* <Typography className="">
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails className="accordian_box_text">
          <Typography  className="accordian_inner_text">
            Recent trends, policies, infrastructure investment plans, improvement analysis, burgeoning middle-income level, industry focus etc. are detailed in the report.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian_report_box" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          style={expanded==='panel3'?{background:"#2E4372",color: "white",borderRadius: "3px"}:{background:"lightgrey",border: "3px solid #A42051",borderRadius: "4px",marginBottom:"8px" }}
      
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="accordian_box_title">3. Who is it for?</Typography>
          {/* <Typography className="">
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails className="accordian_box_text">
          <Typography  className="accordian_inner_text">
            Investors, finance professionals, industry leaders, venture capital, businesses looking to invest in India, equity investors etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian_report_box" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          style={expanded==='panel4'?{background:"#2E4372",color: "white",borderRadius: "3px"}:{background:"lightgrey",border: "3px solid #A42051",borderRadius: "4px",marginBottom:"8px" }}
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="accordian_box_title">4. Delivery Method</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordian_box_text">
          <Typography  className="accordian_inner_text">
            Buyer of the report can pay using credit/debit card, UPI, Net Banking, Wallets. They will be re-routed to the report and can download. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
      </div>

      :null}
    </div>    
</div>
    )
}

export default Report;