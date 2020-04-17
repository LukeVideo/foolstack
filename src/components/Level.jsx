import React, { useState, useEffect } from "react";

import useKey from "../utils/useKey";
import useMultiKey from "../utils/useMultiKey";

const Level = () => {
  const leftKey = useKey("ArrowLeft");
  const rightKey = useKey("ArrowRight");
  const [idledir, setIdledir] = useState("right");

  const handleDir = e => {
    if (idledir !== e) {
      setIdledir(e);
      console.log(`idledir ${idledir}`);
    }
  };

  const keysPressed = useMultiKey();

  //console.log(keysPressed);

  /*  if (leftKey) {
    handleDir("left");
  }

  if (rightKey) {
    handleDir("right");
  }
*/
  const playerClasses = () => {
    if (keysPressed[keysPressed.length - 1] === "ArrowRight") {
      return `player ${idledir} dirRight`;
    }
    return `player ${idledir} `;
  };

  return (
    <div className="level">
      <p>
        {leftKey && "left"}
        {rightKey && "right"}
      </p>
      <div className={playerClasses()} />
    </div>
  );
};
export default Level;
