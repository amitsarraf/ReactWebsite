import React from 'react';
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";

import { Switch, Route, Redirect } from "react-router-dom";

const App =()=>{
  return(
    <>
    <Navbar/>
    <Switch>
    <Route exact path = "/" component={Home}/>
    <Route path = "/about" component={About}/>
    <Route path = "/service" component={Service}/>
    <Route path = "/contact" component={Contact}/>
    <Route path = "/login" component={Login}/>
    <Route path = "/register" component={Register}/>
    <Redirect to = "/"/>
    </Switch>
    <Footer />>
    </>
  )
}

export default App;
