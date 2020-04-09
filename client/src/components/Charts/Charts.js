import React from "react";
import "./Charts.scss";
import FenceStatus from "../FenceStatus/FenceStatus";
import PowerStatus from "../PowerStatus/PowerStatus";

function Charts(props) {
  return (
    <div>
        <h3>Park Stats</h3>
        <FenceStatus data={props.data.perimeterData}></FenceStatus>
        <PowerStatus data={props.data}></PowerStatus>
    </div>
  );
}

export default Charts;
