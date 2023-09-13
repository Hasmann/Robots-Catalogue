import React from "react";
import "./Card.style.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt={props.monsters.name}
        src={`https://robohash.org/${
          props.monsters.id + 20
        }?set=set1&size=180x180`}
      ></img>
      <h2>{props.monsters.name}</h2>
      <p>{props.monsters.email}</p>
    </div>
  );
};
