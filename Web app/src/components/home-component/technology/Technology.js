import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { data } from "../technology/data";
import "./technology.css"


export default function Technology() {
 

  return (
    
    <div className="container">
    <div className="row">
      {data.map((item) => {
        return (
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 technology_main">
            <Card style={{boxShadow:"none"}}>
              <CardActionArea>
               <div className="tech_home_img">

                 <img src={item.pic} alt="pic" />
               </div>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2" style={{justifyContent:"center",display: "flex",color:"#0B245B"}}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="'Poppins', sans-serif"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"center"}}
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
  );
}
