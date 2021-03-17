import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../Images/logo.webp";
import down from "../../Images/down-arrow.png";
import SideNav from "react-simple-sidenav";
import "react-responsive-modal/styles.css";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link } from "react-router-dom";
import "./header.css";
import "./headermedia.css";
import "./slider.css"
import {item,data} from "./Items";
const Header = ({open, setopen}) => {
 
  const [name, setName] = useState("");
  const onOpenModal = (str) => {
    setName(str);
    setopen(true);
  };

  const onCloseModal = () => {
    setopen(false);
  };

  let history = useHistory();

  const redirect = () => {
    history.push('https://gdelt-datalytix.herokuapp.com/')
  };

  const [toggle1,settoggle1] = useState(false);
  const [toggle2,settoggle2] = useState(false);
  const [toggle3,settoggle3] = useState(false);
  const [toggle4,settoggle4] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const navItems = [
    <div style={{background:"#F5F6F6"}}>
    <Accordion  className="slide_container">
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Link to="/"><Typography onClick={()=>{setShowNav(false)}} className="">Home</Typography></Link>
      </AccordionSummary>
     
    </Accordion>
    <Accordion  className="slide_container">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography  className="">Solutions</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Link onClick={()=>{setShowNav(false)}} to="/retail"><div className="head_slide_ele">RETAIL & CPG</div></Link>
          <Link onClick={()=>{setShowNav(false)}} to="/media"><div className="head_slide_ele">MEDIA</div></Link>
          <Link onClick={()=>{setShowNav(false)}} to="/bfsi"><div className="head_slide_ele">BFSI</div></Link>
          <Link onClick={()=>{setShowNav(false)}} to="/gov"><div className="head_slide_ele">GOV</div></Link>
          <Link onClick={()=>{setShowNav(false)}} to="/travel"><div className="head_slide_ele">TRAVEL</div></Link>
          <Link onClick={()=>{setShowNav(false)}} to="/ads"><div className="head_slide_ele">ADS</div></Link>
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion  className="slide_container">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography  className="">Insights</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Link onClick={()=>{setShowNav(false)}} to="/insight/statistics"><div className="head_slide_ele">STATISTICS</div></Link>
          <Link onClick={()=>{setShowNav(false)}} to="/insight/reports"><div className="head_slide_ele">REPORT</div></Link>
          <Link onClick={()=>{setShowNav(false)}} to="/insight/mediumpage"><div className="head_slide_ele">BLOG</div></Link>
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion  className="slide_container">
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Link to="/demo"><Typography onClick={()=>{setShowNav(false)}} className="">Try Us </Typography></Link>
      </AccordionSummary>
     
    </Accordion>
  </div>
  ];
  return (
    <div className="row header fixedheader">
      <div className="col-lg-1 col-md-1 col-sm-1 col-0"></div>
      <div className="col-lg-10 col-md-10 col-sm-10 col-12 header-box-main">
        <div style={{margin:"auto 0"}}>
          <Link to="/"><img src={logo} alt="logo" /></Link>
         <Link to="/"><span className="compny-name">Air Recog.</span></Link> 
        </div>
        <div className="header-tabs">
          {open&&(<Link onClick={()=> setopen(false)} className="home" to="/" style={{margin: "auto auto 0 auto"}}><div className="head-comp">Home</div></Link>)}
          {/* <div class="dropdown" style={{margin: "auto auto 0 auto"}}>
            <div class="dropbtn head-comp" style={{margin: "auto auto 0 auto", backgroundColor: "#F8F8F8"}}>
              Solutions
              <img src={down} alt="dpwm" />
            </div>
            <div class="dropdown-content">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 drop-part1">
                  <div className="drop-left-head">Solution</div>
                  <div className="drop-left-content">
                    Presenting the complete story through alternative data
                    across multiple verticals
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 drop-part2">
                  <div className="row">
                    {item.map((i) => {
                      return <div className="col-lg-4 col-md-4 row-content">
                      {console.log(i.path,"tttttttttttttttttttttttttttttttttttttt")}
                      <Link onClick={()=> setopen(true)} to={i.path}>
                          <img className="img-cont" src={i.pic} alt="pic" />
                          <h5 className="text-cont">{i.text}</h5>
                          </Link>
                        </div>;
                      
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          
            {/* <div class="dropdown" style={{margin: "auto auto 0 auto"}}>
            <div class="dropbtn head-comp" style={{margin: "auto auto 0 auto", backgroundColor: "#F8F8F8"}}>Insights
            <img src={down} alt="dpwm" /></div>
            <div class="dropdown-content1">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 drop-part1">
                      <div className="drop-left-head1">
                        Insights
                      </div>
                      <div className="drop-left-content1">
                      Stories, key statistics, periodic reports for key industries from billions of signals and data points
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 drop-part2">
                  <div className="row" style={{width:"100%"}}>
                     {data.map((i)=>{
                       return <div className="col-lg-4 col-md-4 col-sm-12 col-12 row-content">
                       <Link to={i.path}>
                          <img className="img-cont" src={i.pic} alt="pic"/>
                          <h5 className="text-cont">{i.text}</h5>
                          </Link>
                          </div>
                     })}    
                     </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <Link to="/demo" style={{margin: "auto auto 0 auto"}}><button
            className="head-comp demo-btn"
          >
            Demo
          </button></Link> */}
          <button onClick={event =>  window.location.href='https://gdelt-datalytix.herokuapp.com/'} className="head-comp demo-btn">Demo</button>
        </div>
        <div className="ham-contanier" onClick={() => setShowNav(true)}>
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
      </div>
      <div className="col-lg-1  col-md-1 col-sm-1 col-0"></div>
      <SideNav
        openFromRight={true}
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        navStyle={{ width: "20rem",backgroundColor: "#F5F6F6" }}
        title="Menu Bar"
        items={navItems}
        titleStyle={{
          backgroundColor: "#F3F4F4",
          padding: "0rem 20px",
          color: "#6C6F71",
          fontSize: "22px",
        }}
        itemStyle={{ backgroundColor: "#F5F6F6", listStyle: "none" }}
        itemHoverStyle={{ backgroundColor: "inherit" }}
      />
    </div>
  );
};
export default Header;
