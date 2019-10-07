import React from "react";
import { Link } from "react-router-dom";
import Otto from "../media/ottoColor1.png";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        This is my entry to the #100DaysofGameDev thing. 
        I'm just trying to have fun with React and test a few stupid game ideas I had over the years...
        Thanks to @juul1a for setting this idea up.
        I'm @LukeMartinVideo !
      </p>
      <Link to="/">
        <img src={Otto} alt="Otto, the players slightly bored character..." />
      </Link>
    </div>
  );
};

export default About;