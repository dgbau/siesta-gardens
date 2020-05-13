import React from "react";
import "./ClientList.scss";

// TODO add tabs for three client groups

function ClientList(props) {
  return (
    <div className="clientlist">
      <h4>{props.title}</h4>
      <ul>
        {props.data.filter(x => x.status === props.title.toLowerCase()).map(({ firstName, lastName, location }, idx) => {
          // console.log(idx);
          return (
            <li key={idx}>
              <div>{firstName} {lastName}</div>
              <div className={"subtitle " + location}>{location}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientList;
