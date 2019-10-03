import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CLIENT_ROUTES } from "./constants";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import InstructorList from "./Components/Instructors/InstructorList";
import About from "./Components/About";

function NotFound(){
  return (
      <div className="not-found">
        <h1>Oss!</h1>
        <h2>Sorry, we couldn't find what you were looking for.</h2>
      </div>
  )
}

function App() {
  return (
    <Router>
      <div className="fight-club">
        <Navigation />
        <div className="main">
          <Switch>
            <Route exact path={CLIENT_ROUTES.HOME} component={Home} />
            <Route
              path={CLIENT_ROUTES.INSTRUCTORS}
              component={InstructorList}
            />
            <Route path={CLIENT_ROUTES.ABOUT} component={About} />
            <Route path={CLIENT_ROUTES.CONTACT} component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
