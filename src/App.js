import React, { Component } from "react";
import CardList from "./cardList";
import SearchBox from "./SearchBox";
import Scroll from "./scroll";
import { robots } from "./robots";
import "./App.css";
import SearchBoxDisable from "./searchBoxDisable";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchFields: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchFields: event.target.value });
    console.log(this.state.searchFields);
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respond) => respond.json)
      .then((user) => this.setState({ robot: user }));
  }
  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchFields.toLowerCase());
    });
    // console.log(filterRobots);
    if (this.state.robots.length === 0) {
      return (
        <div className="loadapp">
          <h1>Loading...</h1>
        </div>
      );
    } else if (this.state.searchFields.length >= 20) {
      return (
        <div className="app-style">
          <h1>Robo Friends Gallary</h1>
          <h1>{this.state.searchFields}</h1>
          <SearchBoxDisable onSearchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      );
    } else {
      return (
        <div className="app-style">
          <h1>Robo Friends Gallary</h1>
          <h1>{this.state.searchFields}</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
