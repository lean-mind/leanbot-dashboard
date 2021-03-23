import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTE } from "./routes/routes";
import { LandingPage, LoginForm, Dashboard, PageNotFound } from "./pages";

export const App: React.FC<{}> = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={ ROUTE.LandingPage } component={ LandingPage }/>
          <Route exact path={ ROUTE.LoginForm } component={ LoginForm }/>
          <Route exact path={ ROUTE.Dashboard } component={ Dashboard }/>
          <Route path="*" component={ PageNotFound }/>
        </Switch>
      </div>
    </Router>
  );
}
