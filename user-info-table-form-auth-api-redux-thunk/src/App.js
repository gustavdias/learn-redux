import React, { Component } from "react";

import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/index";
import asyncComponent from "./hoc/LazyLoading/LazyLoading";

import Logout from "./containers/Auth/Logout/Logout";

import Layout from "./hoc/Layout/Layout";

import "./App.css";

const asyncUserDataInputForm = asyncComponent(() => {
  return import("./containers/UserDataInputForm/UserDataInputForm"); //load lazily
});

const asyncAuth = asyncComponent(() => {
  return import("./containers/Auth/Auth");
});

export class App extends Component {
  render() {
    //* routes the user can access if he isn't auth
    let routes = (
      //Switch loads the first one that meets a path
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Redirect to="/" component={asyncAuth}/>{" "}
        {/* in case the user goes to /UserDataFromServer or other address he will be redirected, instead of getting a empty page*/}
      </Switch>
    );
    // logged out user can access /orders (not even manually)
    //? since this of course is all javascript, people can of course always theoretically dig into your source code and still kind of manipulate it to still go to the protected route, and this is why we have protection on the server, to not return any data for unauthenticated users.
    //*this are the routes the user can access if he is auth
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" component={asyncUserDataInputForm} />

          <Route path="/logout" component={Logout} />

          {/* //with a route to Auth, the Auth container redirects to a route that the user does not have access to even though he is auth*/}
          {/* <Route path="/auth" component={Auth} /> */}
          <Route path="/auth" component={asyncAuth} />

          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div className="App">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
