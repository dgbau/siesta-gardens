import React from "react";
import "./ClientList.scss";

// TODO add tabs for three client groups

function ClientList(props) {
  return (
    <div className="clientlist">
      <h5>{props.title}</h5>
      <ul>
        {props.data.filter(x => x.status === props.title.toLowerCase()).map(({ firstName, lastName, location }, idx) => {
          // console.log(idx);
          return (
            <li key={idx}>
              <div className="name"> <em>{idx + 1}</em> {firstName} {lastName}</div>
              <div className={"subtitle " + location}>{location}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientList;
