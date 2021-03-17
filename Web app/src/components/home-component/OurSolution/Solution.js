import React from "react";
import pic from "../../../Datalytix Vectors/PNGs/Group 199.png"
import {data} from "../OurSolution/data";

import  "../OurSolution/solution.css"
const Solution = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src={pic} className="solution-img" alt="soltion" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div><h3>AIG: Alternative Information Graph</h3></div>
                    <div>
                        {
                            data.map((item)=>{
                               return <div className="sol-home-div">
                               <h4><span className="sol-home-tit">{item.title}</span>{`: `}
                               <span className="sol-home-text">{item.text}</span>
                               </h4>
                               </div>
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Solution