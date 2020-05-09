import React, { Component } from "react";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
export default class MapC extends Component {
  constructor(props) {
    super(props);
    console.log("map props", this.props)
    // this.state = {
    //   isLoaded: false,
    //   locs: null,
    //   lat: 27.275,
    //   lng: -82.555,
    //   zoom: 14,
    //   testPos: [27.275, -82.555],
    // };
  }

  componentDidMount() {
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

        <circle cx={((this.props.data.dinoLoc.x - 1500) / 8)} cy={((this.props.data.dinoLoc.y - 1500) / 8) } r={5} fill={'red'}></circle>
        <circle cx={((this.props.data.carLoc.x - 1500) / 8)} cy={((this.props.data.carLoc.y - 1500) / 8) } r={5} fill={'blue'}></circle>
      </svg>
    ) : (
      "Data is loading..."
    );
  }
}
