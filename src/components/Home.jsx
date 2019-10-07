import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <h1>FoOl Stack</h1>
      <h2>Yet Another React Game</h2>
      <p>
        <Link to="/game/">start</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
    </div>
  );
};

export default Home;
