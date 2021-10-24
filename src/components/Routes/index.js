import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header";
import Home from "../../pages/Home";
import Music from "../../pages/Music";
import Artists from "../../pages/Artists";
import Events from "../../pages/Events";
import NotFound from "../../pages/NotFound";
import Footer from "../Footer";

const index = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/music" exact component={Music} />
        <Route path="/artists" exact component={Artists} />
        <Route path="/events" exact component={Events} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default index;
