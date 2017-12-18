//bootstrap
import "bootstrap/dist/css/bootstrap.css";

//default
import React from "react";
import ReactDOM from "react-dom";

//default
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
