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
  fakeFence = [0, 0, 1, 2];
  scale = 530;
  ratio = 3000 / this.scale;

  componentDidMount() {}

  fenceColor(i) {
    if (i == 0) {
      return "#00ff00";
    } else if (i == 1) {
      return "#ffff00";
    } else {
      return "#ff0000";
    }
  }

  render() {
    return this.props ? (
      <svg height={this.scale} width={this.scale/1.275}>
        <rect x="0" y="0" height={this.scale} width={this.scale} />

        <image
          x="0"
          y="0"
          width={this.scale}
          height={this.scale}
          href="images/SGMap_road.jpg"
        />

        {/* TOP */}
        <line
          x1={(2150 - 1500) / this.ratio}
          y1={(2100 - 1500) / this.ratio}
          x2={(3050 - 1500) / this.ratio}
          y2={(2100 - 1500) / this.ratio}
          stroke={this.fenceColor(this.props.data.perimeterData.sections[0])}
          strokeWidth="2px"
        />
        {/* RIGHT */}
        <line
          x1={(3050 - 1500) / this.ratio}
          y1={(2100 - 1500) / this.ratio}
          x2={(3050 - 1500) / this.ratio}
          y2={(3900 - 1500) / this.ratio}
          stroke={this.fenceColor(this.props.data.perimeterData.sections[1])}
          strokeWidth="2px"
        />
        {/* BOTTOM */}
        <line
          x1={(2150 - 1500) / this.ratio}
          y1={(3900 - 1500) / this.ratio}
          x2={(3050 - 1500) / this.ratio}
          y2={(3900 - 1500) / this.ratio}
          stroke={this.fenceColor(this.props.data.perimeterData.sections[2])}
          strokeWidth="2px"
        />
        {/* LEFT */}
        <line
          x1={(2150 - 1500) / this.ratio}
          y1={(2100 - 1500) / this.ratio}
          x2={(2150 - 1500) / this.ratio}
          y2={(3900 - 1500) / this.ratio}
          stroke={this.fenceColor(this.props.data.perimeterData.sections[3])}
          strokeWidth="2px"
        />

        <circle
          cx={(this.props.data.locationData.dinoLoc.x - 1500) / this.ratio}
          cy={(this.props.data.locationData.dinoLoc.y - 1500) / this.ratio}
          r={5}
          fill={"red"}
        ></circle>
        <circle
          cx={(this.props.data.locationData.carLoc.x - 1500) / this.ratio}
          cy={(this.props.data.locationData.carLoc.y - 1500) / this.ratio}
          r={5}
          fill={"#00f7ff"}
        ></circle>
      </svg>
    ) : (
      "Data is loading..."
    );
  }
}
