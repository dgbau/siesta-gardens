import React, { Component } from "react";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
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
      testPos: [27.275, -82.555],
    };
  }

  componentDidMount() {
    setInterval(
      () =>
        fetch("http://127.0.0.1:5000/locs")
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              isLoaded: true,
              locs: result,
            });
            console.log(result);
            // setLocs(result)
          }),
      1000
    );
  }

  render() {
    return this.state.isLoaded ? (
      <svg height="375" width="375">
        <rect x="0" y="0" height="375" width="375" />

        <image
          x="0"
          y="0"
          width="375"
          height="375"
          href="images/SGMap_center1.jpg"
        />

        <circle cx={((this.state.locs.dino[0] - 1500) / 8)} cy={((this.state.locs.dino[1] - 1500) / 8) } r={5} fill={'red'}></circle>
        <circle cx={((this.state.locs.car[0] - 1500) / 8)} cy={((this.state.locs.car[1] - 1500) / 8) } r={5} fill={'blue'}></circle>
      </svg>
    ) : (
      "Data is loading..."
    );
  }
}
