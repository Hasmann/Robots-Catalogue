import React from "react";
import "./card-list.style.css";
import { Card } from "./card.Component";
export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card monsters={monster} />
      ))}
    </div>
  );
};
