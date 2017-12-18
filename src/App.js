import React, {Component} from "react";
import NavBar from "./components/navbar";
import Routers from "./components/router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routers />
      </div>
    );
  }
}

export default App;
