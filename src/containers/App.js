import React, { Component } from "react";
import CardList from "../components/cardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
import { robots } from "../robots";
import "../App.css";

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
    // https://jsonplaceholder.typicode.com/users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respond) => respond.json)
      .then((user) => this.setState({ robot: user }));
  }
  render() {
    const {robots, searchFields} = this.state
    const filterRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchFields.toLowerCase());
    });
    // console.log(filterRobots);
    return (!robots.length) ?
      (
  
        <div className="loadapp">
          <h1>Loading...</h1>
        </div>
      )
       :
      (
        <div className="app-style">
          <h1>Robo Friends Gallary</h1>
          {/* <h1>{this.state.searchFields}</h1> */}
          <SearchBox onSearchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      );
    
  }
}
export default App;
