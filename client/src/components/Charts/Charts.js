import React from "react";
import "./Charts.scss";
import FenceStatus from "../FenceStatus/FenceStatus";

function Charts(props) {
    console.log(props)
  return (
    <div>
        <h3>Park Stats</h3>
        <FenceStatus></FenceStatus>
        Other Charts will go here...
    </div>
  );
}

export default Charts;
