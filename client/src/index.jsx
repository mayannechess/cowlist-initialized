import React from "react";
import ReactDOM from "react-dom";
import CowList from "./cowList";
import CowForm from "./cowForm";

import requests from "./requests";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCow: { id: 1, name: "Daisy", description: "A flower with lots of petals" },
      cowList: [
        { id: 1, name: "Daisy", description: "A flower with lots of petals" },
        { id: 2, name: "Kitten", description: "A baby cat" }
      ]
    };
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    requests.fetchCows((err, data) => {
      this.setState( { cowList: data } );
    });
  }

  addCow(name, description) {
    const newCow = {
      name: name,
      description: description
    };
    requests.addCow(newCow, (err, data) => {
      this.getCows();
    });
  }

  handleCowClick(cow) {
    this.setState( { currentCow: cow } );
  }

  render() {
    return (
      <div>
        <h1 id="cow-name">{this.state.currentCow.name}</h1>
        <h3 id="cow-description">{this.state.currentCow.description}</h3>
        <div><CowList entries={this.state.cowList} handler={this.handleCowClick.bind(this)} /></div>
        <h4>Create a cow:</h4>
        <CowForm handler={this.addCow.bind(this)} />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);

