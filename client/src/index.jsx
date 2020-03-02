import React from "react";
import ReactDOM from "react-dom";
import CowList from "./cowList";
import CowForm from "./cowForm";
import UpdateForm from "./updateForm";

import requests from "./requests";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCow: {},
      cowList: []
    };
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    requests.fetchCows((err, data) => {
      if (err) {
        console.error(err);
      } else {
        this.setState( { cowList: data } );
      }
    });
  }

  addCow(name, description) {
    const newCow = {
      name: name,
      description: description
    };
    requests.addCow(newCow, (err, data) => {
      if (err) {
        console.error(err);
      } else {
      this.getCows();
      }
    });
  }

  handleCowClick(cow) {
    this.setState( { currentCow: cow } );
  }

  updateCow(name, description) {
    requests.updateCow(name, description, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.getCows();
        this.setState({
          currentCow: {}
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h1 id="cow-name">{this.state.currentCow.name}</h1>
        <h3 id="cow-description">{this.state.currentCow.description}</h3>
        <div><CowList entries={this.state.cowList} handler={this.handleCowClick.bind(this)} /></div>
        <h4>Create a cow:</h4>
        <CowForm handler={this.addCow.bind(this)} />
        <br />
        <UpdateForm cows={this.state.cowList} handler={this.updateCow.bind(this)} />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);

