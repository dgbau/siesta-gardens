import React from "react";
import "./ClientList.scss";

// TODO add tabs for three client groups

function ClientList(props) {
  return (
    <div className="clientlist">
      <h3>{props.title}</h3>
      <ul>
        {props.data.filter(x => x.status === props.title.toLowerCase()).map(({ firstName, lastName }, idx) => {
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
