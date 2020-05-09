import React, { Component } from "react";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
export default class MapC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      locs: null,
    };
  }
  fakeFence = [0,0,1,2]

  componentDidMount() {
  }

  fenceColor(i){
    if (i == 0){
      return "#00ff00"
    } else if (i == 1) {
      return "#ffff00"
    } else {
      return "#ff0000"
    }
  }

  render() {
    return this.props ? (
      <svg height="375" width="375">
        <rect x="0" y="0" height="375" width="375" />

        <image
          x="0"
          y="0"
          width="375"
          height="375"
          href="images/SGMap_center1.jpg"
        />

        {/* TOP */}
        <line x1={(2150 - 1500) / 8} y1={(2100 - 1500) / 8} x2={(3050 - 1500) / 8} y2={(2100 - 1500) / 8} stroke={this.fenceColor(this.fakeFence[0])} strokeWidth="2px"/>
        {/* RIGHT */}
        <line x1={(3050 - 1500) / 8} y1={(2100 - 1500) / 8} x2={(3050 - 1500) / 8} y2={(3900 - 1500) / 8} stroke={this.fenceColor(this.fakeFence[1])} strokeWidth="2px"/>
        {/* BOTTOM */}
        <line x1={(2150 - 1500) / 8} y1={(3900 - 1500) / 8} x2={(3050 - 1500) / 8} y2={(3900 - 1500) / 8} stroke={this.fenceColor(this.fakeFence[2])} strokeWidth="2px"/>
        {/* LEFT */}
        <line x1={(2150 - 1500) / 8} y1={(2100 - 1500) / 8} x2={(2150 - 1500) / 8} y2={(3900 - 1500) / 8} stroke={this.fenceColor(this.fakeFence[3])} strokeWidth="2px"/>

        <circle cx={((this.props.data.dinoLoc.x - 1500) / 8)} cy={((this.props.data.dinoLoc.y - 1500) / 8) } r={5} fill={'red'}></circle>
        <circle cx={((this.props.data.carLoc.x - 1500) / 8)} cy={((this.props.data.carLoc.y - 1500) / 8) } r={5} fill={'blue'}></circle>
      </svg>
    ) : (
      "Data is loading..."
    );
  }
}
