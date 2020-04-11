import React from "react";
import "./Dashboard.scss";
import ClientList from "../ClientList/ClientList";
import Map from "../Map/Map";
import Charts from "../Charts/Charts";
import Camera from "../Camera/Camera";

function Dashboard(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <div className="widget">
            <Map data={props.data.locationData}></Map>
          </div>
        </div>
        <div className="col-4">
          <div className="widget">
            <Charts data={props.data}></Charts>
          </div>
        </div>
        <div className="col-4">
          <div className="widget">
            <ClientList data={props.data.clientData.clients}></ClientList>
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
    </div>
  );
}



export default Dashboard;
