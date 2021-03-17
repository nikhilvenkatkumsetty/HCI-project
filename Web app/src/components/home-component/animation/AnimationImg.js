import React, {useLayoutEffect } from 'react';
import facebook from "../../../assets/images/Site Files/facebook.svg";
import instagram from "../../../assets/images/Site Files/instagram.svg";
import footfall from "../../../assets/images/Site Files/footfall.svg";
import api from "../../../assets/images/Site Files/api.svg";
import rss from "../../../assets/images/Site Files/rss.svg";
import web from "../../../assets/images/Site Files/web_data.svg";
import wallet from "../../../assets/images/Site Files/wallet.svg";
import mobile from "../../../assets/images/Site Files/mobile-app.svg";
import twitter from "../../../assets/images/Site Files/twitter.svg";
import youtube from "../../../assets/images/Site Files/youtube.svg";

import drone from "../../../assets/images/Site Files/bubble_icons/Satellite/drone.svg";
import satellite from "../../../assets/images/Site Files/bubble_icons/Satellite/satellite.svg";

import conference from "../../../assets/images/Site Files/bubble_icons/Unstructured/conference.svg";
import memo from "../../../assets/images/Site Files/bubble_icons/Unstructured/memo.svg";
import report from "../../../assets/images/Site Files/bubble_icons/Unstructured/report.svg";
import speech from "../../../assets/images/Site Files/bubble_icons/Unstructured/speech.svg"

import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 
am4core.useTheme(am4themes_animated);

function AnimationImg(props) {
  
  useLayoutEffect(() => {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree); 

    let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
 
   series.data = [  
      {  
         "name":"Unstructured Data",
         "value":170,
         "linkWith":[  
            "Social Feeds"
         ],
         "children":[  
            {  
               "value":-22,
               "image":conference
            },
            {  
               "value":-23,
               "image":memo
            },
            {  
               "value":-21,
               "image":report
            },
            {  
               "value":-24,
               "image":speech
            },
         ]
      },
      {  
         "name":"Social Feeds",
         "value":170,
         "linkWith":[  
            "Location",
            "Web Data",
            "Satellite Feeds"
         ],
         "children":[  
            {  
               "value":-20,
               "image":facebook
            },
            {  
               "value":-20,
               "image":instagram
            },
            {  
               "value":-20,
               "image":twitter
            }
         ]
      },
      {  
         "name":"Web Data",
         "value":170,
         "linkWith":[  
         "Inventory",
            "Social Feeds",
            "Satellite Data"
         ],
         "children":[  
            {  
               "value":-20,
               "image":rss
            },
            {  
               "value":-20,
               "image":web
            },
            
         ]
      },
      {  
         "name":"Satellite Data",
         "value":175,
         "linkWith":[  
         "Inventory",
            "Web Data",
            "Social Feeds"
         ],
         "children":[  
            {  
               "value":-20,
               "image":drone
            },
            {  
               "value":-20,
               "image":satellite
            },
         ]
      },
      {  
         "name":"Transactions",
         "value":175,
         "linkWith":[  
         "Inventory",
            "Web Data",
            "Social Feeds",
            "Video Feeds"
         ],
         "children":[  
            {  
               "value":-70,
               "image":wallet
            },
         ]
      },
      {  
         "name":"Location Indicators",
         "value":200,
         "linkWith":[  
         "Inventory",
            "Web Data",
            "Social Feeds",
            "Transactions"
         ],
         "children":[  
                           { 
                  "name": "footfall", 
                  "value":-20,
                  "image":footfall
               },
               { 
                  "name": "mobile-app", 
                  "value":-14,
                  "image":mobile
               }
         ]
      }
   ];
     chart.zoomable = false;
      // Set up data fields
      series.dataFields.linkWith = "linkWith";
      series.dataFields.value = "value";
      series.dataFields.name = "name";
      series.dataFields.children = "children";
    series.dataFields.id = "name";
    series.nodes.template.label.text = "{name}"  
    series.linkWithStrength = 0;
    chart.logo.disabled = true;
      series.fontSize = 14;
      // series.minRadius = 50;
    //   series.maxRadius = 40;
    

      var nodeTemplate = series.nodes.template;
      nodeTemplate.tooltipText = "{name}";
      nodeTemplate.fillOpacity = 1;
      nodeTemplate.label.hideOversized = true;
      nodeTemplate.label.truncate = true;
      
      series.nodes.template.children.disabled = true;

      // series.nodes.template.circle.disabled = true;
      // Configure icons
var icon = series.nodes.template.createChild(am4core.Image);
icon.propertyFields.href = "image";
icon.horizontalCenter = "middle";
icon.verticalCenter = "middle";
icon.width = 28;
icon.height = 33;


// series.centerStrength = 0.63;
series.manyBodyStrength = -25;
      var linkTemplate = series.links.template;
      linkTemplate.strokeWidth = 2;
      var linkHoverState = linkTemplate.states.create("hover");
      linkHoverState.properties.strokeOpacity = 1;
      linkHoverState.properties.strokeWidth = 2;
      series.links.template.distance = 2;
      nodeTemplate.events.on("over", function (event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function (link) {
            link.isHover = true;
        })
    })
    
    nodeTemplate.events.on("out", function (event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function (link) {
            link.isHover = false;
        })
    })
    

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div className="bubble_chart" id="chartdiv" style={{height:"26rem"}}></div>
  );
}
export default AnimationImg;

// { 
//    "name": "footfall", 
//    "value":0,
//    "image":footfall
// },
// { 
//    "name": "mobile-app", 
//    "value":0,
//    "image":mobile
// }

   // series.dataFields.dateX = "date";
    // series.dataFields.valueY = "value";
    // series.tooltipText = "{valueY.value}";
   //  series.data = [  
   //    {  
   //       "name":"Location Indicators",
   //       "value":250,
   //       "image":facebook,
   //       "linkWith":[  
   //          "Social Feeds"
   //       ],
   //       "children":[  
   //          {  
   //             "value":40
   //          }
   //       ]
   //    },
   //    {  
   //       "name":"Social Feeds",
   //       "value":250,
   //       "image":instagram,
   //       "linkWith":[  
   //          "Location",
         
   //          "Satellite Feeds"
   //       ],
   //       "children":[  
   //          {  
   //             "value":40
   //          },
   //          // {  
   //          //    "value":40
   //          // }
   //       ]
   //    },
   //    {  
   //       "name":"Web Data",
   //       "value":250,
   //       "image":api,
   //       "linkWith":[  
   //       "Inventory",
   //          "Social Feeds",
   //          "Satellite Data"
   //       ],
   //       "children":[  
   //          {  
   //             "value":40
   //          },
   //          {  
   //             "value":40
   //          },
   //          // {  
   //          //    "value":40
   //          // }
   //       ]
   //    },
   //    {  
   //       "name":"Satellite Data",
   //       "value":250,
   //       // "image":footfall,
   //       "linkWith":[  
   //       "Inventory",
           
   //       ],
   //       "children":[  
   //          {  
   //             "value":40
   //          },
   //          // {  
   //          //    "value":40
   //          // }
   //       ]
   //    },
   //    {  
   //       "name":"Transactions",
   //       "value":200,
   //       // "image":rss,
   //       "linkWith":[  
   //       "Inventory",
   //          "Web Data",
   //          "Social Feeds",
   //          "Video Feeds"
   //       ],
   //       "children":[  
   //          {  
   //             "value":40
   //          },
   //       ]
   //    },
   //    {  
   //       "name":"Video Feeds",
   //       "value":200,
         
   //       "linkWith":[  
   //       "Inventory",
          
   //          "Transactions"
   //       ],
   //       "children":[  
   //          {  
   //             "value":40
   //          }
   //       ]
   //    },
   //    {  
   //       "name":"Twitter Feeds",
   //       "value":200,
         
   //       "linkWith":[  
   //       "Inventory",
   //          "Web Data",
   //          "Social Feeds",
   //          "Transactions"
   //       ],
   //       "children":[  
   //          {  
   //             "value":40
   //          }
   //       ]
   //    },
   //    {  
   //       "name":"Youtube Feeds",
   //       "value":200,
   //       "image":youtube,
   //       "linkWith":[  
   //       "Inventory",
   //          "Web Data",
            
   //       ],
   //       "children":[  
   //          {  
   //             "value":40
   //          }
   //       ]
   //    },
   //    {  
   //       "name":"mobile Feeds",
   //       "value":200,
        
   //       "linkWith":[  
   //       "Inventory",
            
   //          "Social Feeds",
   //          "Transactions"
   //       ],
   //       "children":[  
   //          {  
   //             "value":40
   //          }
   //       ]
   //    }
   // ];