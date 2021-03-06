import React from "react";
import {Route, Switch} from "react-router-dom";
import Welcome from "./welcome";
import Menu from "./menu";
import Reservations from "./reservation-form";
import MapLayout from "./maplayout";

const Routers = props => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/reservation" component={Reservations} />
      <Route exact path="/location" component={MapLayout} />
    </Switch>
  );
};

//

export default Routers;
