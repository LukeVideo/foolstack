import React from "react";
import { Link } from "react-router-dom";
import Otto from "../media/ottoColor1.png";

const Game = () => {
  return (
    <div>
      <h2>Game</h2>
      <Link to="/gameover">
        <img src={Otto} alt="Otto, the players slightly bored character..." />
      </Link>
      <p>
        This is really early stage... <b /> Click Otto to complete the level
      </p>
    </div>
  );
};

export default Game;
