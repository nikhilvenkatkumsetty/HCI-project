import React, { Component } from "react";
import { Map, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import data from "./cities";

class App extends Component {
  render() {
    var centerLat = (data.minLat + data.maxLat) / 2;
    var distanceLat = data.maxLat - data.minLat;
    var bufferLat = distanceLat * 0.05;
    var centerLong = (data.minLong + data.maxLong) / 2;
    var distanceLong = data.maxLong - data.minLong;
    var bufferLong = distanceLong * 0.05;
    function colorChange(data) {
      if (data > 1500) {
        return "green";
      } else if (data > 800) {
        return "yellow";
      } else {
        return "red";
      }
    }
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>
          Footfall trends of Reliance Retail store
        </h3>
        <Map
          style={{ height: "480px", width: "100%" }}
          style={{border:"2px solid darkgrey",borderRadius:"5px"}}
          zoom={30}
          center={[centerLat, centerLong]}
          bounds={[
            [data.minLat - bufferLat, data.minLong - bufferLong],
            [data.maxLat + bufferLat, data.maxLong + bufferLong]
          ]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {data.city.map((city, k) => {
            return (
              <CircleMarker
                key={k}
                center={L.latLng(city.lat, city.long)}
                radius={0.019 * city["Footfall"]}
                fillOpacity={0.4}
                stroke={false}
                color={colorChange(city["Footfall"])}
              >
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>{city["place"].toUpperCase()}</span>
                  <br />
                  <span>Address : {city["name"].slice(0, 30) + "..."}</span>
                  <br />
                  <span>Rating: {city["rating"]}</span>
                  <br />
                  <span>Prospects: {city["Footfall"]}</span>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </Map>
      </div>
    );
  }
}

export default App;
