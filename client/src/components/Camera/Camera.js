import React from "react";
import "./Camera.scss";

function Camera(props) {
    console.log(props)
  return (
    <div>
        <h3>Camera {props.camID}</h3>
        Camera will go here...
    </div>
  );
}

export default Camera;
