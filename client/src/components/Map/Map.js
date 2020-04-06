import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
export default class MapC extends Component {
  state = {
    lat: 27.275,
    lng: -82.555,
    zoom: 14,
  };
  render() {
    return this.props.cars ? (
      <Map
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    ) : (
      "Data is loading..."
    );
  }
}
