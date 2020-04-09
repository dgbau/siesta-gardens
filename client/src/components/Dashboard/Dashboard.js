import React from "react";
import "./Dashboard.scss";
import ClientList from "../ClientList/ClientList";
import Map from "../Map/Map";
import Charts from "../Charts/Charts";
import Camera from "../Camera/Camera";

function Dashboard(props) {
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="widget">
            <Map cars="carList"></Map>
          </div>
        </div>
        <div className="col-3">
          <div className="widget">
            <Charts></Charts>
          </div>
        </div>
        <div className="col-3">
          <div className="widget">
            <ClientList></ClientList>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="widget">
            <Camera camID="1"></Camera>
          </div>
        </div>
        <div className="col-4">
          <div className="widget">
            <Camera camID="2"></Camera>
          </div>
        </div>
        <div className="col-4">
          <div className="widget">
            <Camera camID="3"></Camera>
          </div>
        </div>
      </div>
      {/* below is just for an example of passing props, remove whenever */}
      <div>
        <p>{props.data}</p>
        <p>{props.data2.string1}</p>
        <p>{props.data2.string2}</p>
      </div>
    </div>
  );
}



export default Dashboard;
