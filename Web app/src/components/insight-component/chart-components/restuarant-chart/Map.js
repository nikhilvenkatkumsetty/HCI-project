import React from "react";
import { Map as LeafletMap, TileLayer} from "react-leaflet";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import { geojson } from "./cities";
import "../../../../../node_modules/leaflet/dist/leaflet.css"
import "./styles.css";
class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 12.9716,
      lng: 77.5946,
      zoom: 12,
      position: [12.9716, 77.5946]
    };
  }

  render() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    return (
      <LeafletMap center={this.state.position} zoom={this.state.zoom}>
        <HeatmapLayer
          points={geojson.features}
          longitudeExtractor={(m) => m.geometry.coordinates[0]}
          latitudeExtractor={(m) => m.geometry.coordinates[1]}
          intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
          max={100}
          minOpacity={0.4}
        />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    );
  }
}

export default Map;
