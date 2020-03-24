import React from "react";
import "./Dashboard.scss";
import ClientList from "../ClientList/ClientList";
import Map from "../Map/Map";
import Charts from "../Charts/Charts";

function Dashboard(props) {
    console.log(props)
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="widget">
            <Map></Map>
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
            <h3>Cam 1</h3>
          </div>
        </div>
        <div className="col-4">
          <div className="widget">
            <h3>Cam 2</h3>
          </div>
        </div>
        <div className="col-4">
          <div className="widget">
            <h3>Cam 3</h3>
          </div>
        </div>
      </div>
      <div>
          <p>{props.data}</p>
          <p>{props.data2.string1}</p>
          <p>{props.data2.string2}</p>
      </div>
    </div>
  );
}

export default Dashboard;
