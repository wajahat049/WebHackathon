import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from "../pages/Home.jsx";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";
import Item from "../pages/Item.jsx";





class AppRouter extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Item" component={Item} />
      </Router>
    );
  }
}

export default AppRouter;
