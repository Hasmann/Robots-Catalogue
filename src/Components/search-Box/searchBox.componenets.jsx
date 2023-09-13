import React from "react";

import "./searchBox.style.css";

export const Search = ({ placeholder, changeStat }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={changeStat}
    ></input>
  );
};
