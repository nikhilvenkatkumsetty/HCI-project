import React from "react";
import "../../assets/styles/solution-styles/SolutionStyles.scss";
import Button from "../../building-blocks/atoms/Button/Button";
import interest from "../../assets/images/solution-assests/rti-assests/interest.svg";
import {Link} from "react-router-dom"
export default function Contact(props) {
  return (
    <div className="">
      <div className="row contact_common">
      <div className="col-lg-1 col-md-1 col-sm-12 col-12">

      </div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-12 contact_container">
          <div className="interested_wrap">
            <div>Interested? </div>
            <div>Let's get in touch!</div>
            <div>
              Drop us a message if you wish to learn more about Air Recog. and
              how we can help you.
            </div>
            <a target="blank" href={"https://us7.list-manage.com/contact-form?u=c45b4435fa81fc45d23ed7254&form_id=6313ebab993ba9105ee068628885d91f"}><button style={{borderRadius:"4px"}} className="demo-but">Contact Us </button></a>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-0 col-0 contact_container_img">
          <div className="contact_img">
            <img src={interest} alt="interest" />
          </div>
        </div>
        <div className="col-lg-1 col-md-1">

        </div>
      </div>
    </div>
  );
}
