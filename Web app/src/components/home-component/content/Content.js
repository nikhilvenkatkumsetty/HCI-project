import React,{useState} from "react";
// import ReactRoate from "react-rotating-text";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Animation from "../animation/AnimationImg"
import "./content.css"

const Content = () => {
  const [open, setopen] = useState(false);
  const onOpenModal = (str) => {

    setopen(true);
    
  };
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  const onCloseModal = () => {
    setopen(false);
  };
  return (
    <div className="content">
      <div className="row media_content">
      <Modal open={open} onClose={onCloseModal}>
          <h2 className="topic">{"Datalytix"}</h2>
        </Modal>
        <div className="col-lg-1 col-md-1 col-sm-1 col-0"></div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="title-edge">
                <div className="title-content">Experience <span>the future</span> with your own hands.<span><br/> Low effort, no cost.</span></div>
                {/* <div className="typewriter">
                The most comprehensive, economical and effortless AI data intelligence platform for business decisions.
                </div> */}
                <div className="demo-btn-div">
                
                {/* <Link to="/demo"><button style={{borderRadius:"4px"}} className="demo-but">Give it a try!<span className="try_us_buttn"></span></button></Link> */}
                <button type="button" id="platform" class="platform" style={{ margin: "auto",textAlign:"center", fontFamily: "poppins", color:"white", background: "#092685", borderRadius: "5px", fontSize:"18px"}} onClick={event =>  window.location.href='https://gdelt-datalytix.herokuapp.com/'}>Give it a try!</button>
                {/* <button onClick={event =>  window.location.href='https://gdelt-datalytix.herokuapp.com/'} style={{borderRadius:"4px"}} className="head-comp demo-btn">Give it a try!</button> */}
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-4 col-12">
            <div>
                <Animation/>
            </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-0"></div>
      </div>
    </div>
  );
};

export default Content;