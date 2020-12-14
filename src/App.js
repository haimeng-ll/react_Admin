import React, { Component } from "react";
import { Button } from "antd";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";
import Admin from "./pages/admin/admin";
import Login from "./pages/login/login";
export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/admin" component={Admin}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
