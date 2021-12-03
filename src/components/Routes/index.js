import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "../Header";
import Home from "../../pages/Home";
import Music from "../../pages/Music";
import Artists from "../../pages/Artists";
import Events from "../../pages/Events";
import Footer from "../Footer";
import ScrollToTop from "../scrollToTop";

const index = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/music" exact component={Music} />
        <Route path="/artists" exact component={Artists} />
        <Route path="/events" exact component={Events} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default index;
