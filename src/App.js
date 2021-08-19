import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./COMPONENTS/Header/Header";
import Home from "./PAGES/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
