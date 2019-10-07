import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import About from "./components/About"

import "./styles.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/game" exact component={Game} />
      <Route path="/gameover" exact component={GameOver} />
      <Route path="/about" exact component={About} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
