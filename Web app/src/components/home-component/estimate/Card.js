import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { data } from "./data";
import "./estimate.css";

export default function Estimate() {
  return (
    <div className="estimate_main">
      <div className="">
        <div className="row estimate_mob">
          {data.map((item) => {
            return (
              <div className="col-lg-4 col-md-4 col-sm-10 col-10 col_estimate_mob">
                <Card className="card_estimate_transform" style={{ background: "#F2F2F2",margin:"auto",marginBottom: "25px" , padding: "5rem 0",height:"350px",outline:"none"}}>
              
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="h2"
                        className="h2_card"
                      >
                        <span className="estimate_num">{item.t1}</span>
                        <span className="estimate_data" style={{ textTransform: 'lowercase'}}>{` ${item.t2}`}</span>
                      </Typography>
                      <div className="blue_bottom_wrap">
                        <div className="blue_bottom"></div>
                      </div>
                      <Typography
                        variant="'Poppins', sans-serif"
                        component="p"
                        className="card_content"
                      >
                        {item.text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}








  