import React from "react";
import { Link } from "react-router-dom";

const GameOver = () => {
  return (
    <div>
      <h2>Game Over</h2>
      <Link to="/">
        <p>
         Play Again
        </p>
      </Link>
    </div>
  );
};

export default GameOver;
