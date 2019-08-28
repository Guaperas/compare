import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
//Components import
import TaeCompare from "./TaeCompareApp";
//CSS imports
import "./css/App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Aplicación mazo de guapa</h1>
        <TaeCompare />
      </div>
    );
  }
}

export default hot(App);