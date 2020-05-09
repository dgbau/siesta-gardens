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
    console.log(this.props.data);
    return this.state.isLoaded ? (
      <svg>
        <rect x="0" y="0" height="600" width="600" style="fill: #000000" />

        <image
          x="0"
          y="0"
          width="600"
          height="600"
          href="images/SGMap.png"
        />

        <line
          x1="25"
          y1="80"
          x2="350"
          y2="80"
          style="stroke: #ffffff; stroke-width: 3;"
        />
      </svg>
    ) : (
      "Data is loading..."
    );
  }
}
