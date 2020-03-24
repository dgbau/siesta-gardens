import React from "react";
import "./ClientList.scss";

function ClientList(props) {
    console.log(props)
  return (
    <div>
        <h3>Client List</h3>
        <ul>
            <li>Client 1</li>
            <li>Client 2</li>
            <li>Client 3</li>
            <li>Client 4</li>
            <li>Client 5</li>
        </ul>
    </div>
  );
}

export default ClientList;
