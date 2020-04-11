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
    console.log(this.props.data)
    return this.props.data ? (
      <Map
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp; USGS'
          url="http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png"
        />
        {/* <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
      </Map>
    ) : (
      "Data is loading..."
    );
  }
}
