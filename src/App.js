import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {CLIENT_ROUTES} from "./constants";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import InstructorList from './Components/Instructors/InstructorList';

function App() {
    return (
        <Router>
            <div className="fight-club">
                <Navigation/>
                <div className="content">
                    <Switch>
                        <Route exact path={CLIENT_ROUTES.HOME} component={Home}/>
                        <Route path={CLIENT_ROUTES.INSTRUCTORS} component={InstructorList}/>
                        <Route path={CLIENT_ROUTES.ABOUT} component={Home}/>
                        <Route path={CLIENT_ROUTES.CONTACT} component={Contact}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
