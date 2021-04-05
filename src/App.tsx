import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Dashboard, LandingPage } from "./pages";

export const App: React.FC<{}> = () => {
  
  return (
    <Router>
      <div className="App">  
        <Switch>
          <Route exact path="/" component={ LandingPage }/>
          <Route exact path="/dashboard" component={ Dashboard }/>
        </Switch>      
      </div>
    </Router>
  );
}
