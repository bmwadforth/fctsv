import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {CLIENT_ROUTES} from "./constants";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="fight-club">
      <Navigation />
      <Router>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
