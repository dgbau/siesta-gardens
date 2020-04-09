import React from "react";
import "./PowerStatus.scss";

function PowerStatus(props) {
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
      <h5>Power Status</h5>
      <p>Insert more charts and such here.</p>
    </div>
  );
}

export default PowerStatus;
