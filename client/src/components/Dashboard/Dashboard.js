import React, {Component, useState, useEffect} from "react";
import "./Dashboard.scss";
import ClientList from "../ClientList/ClientList";
import Map from "../Map/Map";
import Charts from "../Charts/Charts";
import Camera from "../Camera/Camera";

function getData() {
  fetch('http://127.0.0.1:5000/locs').then(x => console.log(x.body))
}

function Dashboard(props) {
  const [locs, setLocs] = useState(null);

  // useEffect(() => {
  //   setInterval(() => 
  //   fetch('http://127.0.0.1:5000/locs')
  //     .then(res => res.json())
  //     .then((result) => {
  //       // console.log(result);
  //       setLocs(result)
  //     }), 1000)
  // }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <div className="widget">
            <Map data={locs}></Map>
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
