import React, {Component} from "react";
import NavBar from "./components/navbar";
import Routers from "./components/router";
import Header from "./components/header";
import "./App.css";
import Map from "./components/map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Routers />
        <Map />
      </div>
    );
  }
}

export default App;
