import React, { Component } from "react";
import { CardList } from "./Components/card-list/card-list.components";
import { Search } from "./Components/search-Box/searchBox.componenets";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  changeState = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const monst = this.state.monsters;
    const filtered = monst.filter((el) => {
      return el.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Robots Catalogue</h1>
        <Search
          placeholder={"Search Robots"}
          changeStat={this.changeState}
        ></Search>
        <CardList monsters={filtered}></CardList>
      </div>
    );
  }
}

export default App;
