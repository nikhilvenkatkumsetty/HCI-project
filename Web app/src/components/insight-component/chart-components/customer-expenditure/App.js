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
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>
          Average monthly spending on a leading e-commerce website by Top 50
          non-metro dwellers
        </h3>
        <Map
          style={{ height: "480px", width: "100%" }}
          zoom={35}
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
                center={L.latLng(city["Lat"], city["Lon"])}
                radius={0.9 * (city["Transaction Val"] / 6 / 1000000)}
                fillOpacity={0.2}
                stroke={true}
              >
                <Tooltip direction="right" offset={[2, -2]} opacity={0.9}>
                  <span>
                    <strong>{city["City"].toUpperCase()}</strong>
                  </span>
                  <br />
                  <span>
                    {(city["Transaction Val"] / 6 / 1000000).toFixed(2)} Crs.
                  </span>
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
