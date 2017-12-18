import React, {Component} from "react";
import NavBar from "./components/navbar";
import Routers from "./components/router";
import Header from "./components/header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Routers />
      </div>
    );
  }
}

export default App;
