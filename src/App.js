import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppHeader from "./components/AppHeader";

import Home from "./page/Home";
import Login from "./page/Login";
import Profile from "./page/Profile";
import Signup from "./page/Signup";
import Food from "./page/Food";
import AddFood from "./page/AddFood";
import Footer from "./page/Footer";

import "./App.css";

const App = () => (
  <Router>
    <div className="height">
      <AppHeader />

      <Route exact path="/" component={Home} />
      <Route path="/food" component={Food} />

      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/addfood" component={AddFood} />
      <Route path="/profile" component={Profile} />

      <Route exact path="/" component={Footer} />
    </div>
  </Router>
);

export default App;
