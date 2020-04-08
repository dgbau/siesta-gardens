import React from "react";
import "./ClientList.scss";

function ClientList(props) {
  return (
    <div className="clientlist">
      <h3>Client List</h3>
      <ul>
        {props.data.map(({ firstName, lastName }, idx) => {
          // console.log(idx);
          return (
            <li key={idx}>
              {firstName} {lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientList;
