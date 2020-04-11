import React, { Component, } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
export default class MapC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      locs: null,
      lat: 27.275,
      lng: -82.555,
      zoom: 14,
      testPos: [27.275, -82.555]
    };
  }

  componentDidMount() {
    setInterval(() => 
    fetch('http://127.0.0.1:5000/locs')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          locs: result
        });
        console.log(result);
        // setLocs(result)
      }), 1000)
  }

  render() {
    console.log(this.props.data)
    return this.state.isLoaded ? (
      <Map
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        style={{ width: "100%", height: "400px" }}
      >
        <Marker position={this.state.locs.dino}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
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
