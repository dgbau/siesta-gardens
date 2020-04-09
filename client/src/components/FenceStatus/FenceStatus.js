import React from "react";
import "./FenceStatus.scss";

function FenceStatus(props) {
  const fenceSection = 20;

  const getColor = (val) => {
    switch (val) {
      case 0:
        return "#000000";
      case 1:
        return "#ffff00";
      case 2:
        return "#ff0000";
    }
  };

  return (
    <div>
      <h5>Fence Status</h5>
      <svg>
        <g fill="grey" transform="rotate(45 50 140)">
          {props.data.sections.map((d, i) => (
            <rect
              key={i}
              x={((fenceSection * i) % 100) + (i % 5)}
              y={Math.floor(i / 10) * fenceSection + Math.floor(i / 10)}
              width={i % 5 == 0 || i % 5 == 4 ? "5" : "20"}
              height={i % 5 == 0 || i % 5 == 4 ? "20" : "5"}
              fill={getColor(d)}
            ></rect>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default FenceStatus;
