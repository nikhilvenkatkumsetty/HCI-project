am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_dataviz)
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
    
    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";
    
    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.linkWithStrength = 0;
    
    var nodeTemplate = networkSeries.nodes.template;
    nodeTemplate.tooltipText = "{name}";
    nodeTemplate.fillOpacity = 1;
    nodeTemplate.label.hideOversized = true;
    nodeTemplate.label.truncate = true;
    
    var linkTemplate = networkSeries.links.template;
    linkTemplate.strokeWidth = 1;
    var linkHoverState = linkTemplate.states.create("hover");
    linkHoverState.properties.strokeOpacity = 1;
    linkHoverState.properties.strokeWidth = 2;
    
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
    

    networkSeries.data = [  
       {  
          "name":"Inventory",
          "value":250,
          "linkWith":[  
             "Procurement"
          ],
          "children":[  
             {  
               
                "value":40
             }
          ]
       },
       {  
          "name":"Procurement",
          "value":250,
          "linkWith":[  
             "Inventory",
             "Warehousing",
             "Distribution"
             
          ],
          "children":[  
             {  
               
                "value":40
             },
             {  
              
                "value":40
             }
          ]
       },
       {  
          "name":"Warehousing",
          "value":250,
          "linkWith":[  
          "Inventory",
             "Procurement",
             "Distribution"
          ],
          "children":[  
             {  
                
                "value":40
             },
             {  
                
                "value":40
             },
             {  
                
                "value":40
             }
          ]
       },
       {  
          "name":"Distribution",
          "value":250,
          "linkWith":[  
          "Inventory",
             "Warehousing",
             "Procurement"
          ],
          "children":[  
             {  
                
                "value":40
             },
             {  
                
                "value":40
             }
          ]
       },
       {  
          "name":"Finance",
          "value":200,
          "linkWith":[  
          "Inventory",
             "Warehousing",
             "Procurement",
             "Analytics"
          ],
          "children":[  
             {  
                
                "value":40
             },
            
          ]
       },
       {  
          "name":"Analytics",
          "value":200,
          "linkWith":[  
          "Inventory",
             "Warehousing",
             "Procurement",
             "Finance"
          ],
          "children":[  
             {  
              
                "value":40
             }
          ]
       }
     
     
    ];

    function myFunction(x) {
        if (x.matches) { // If media query matches
            networkSeries.fontSize = 8;
        } else {
            networkSeries.fontSize = 15;
    
        }
    }

var x = window.matchMedia("(max-width: 500px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
    
    
    }); 