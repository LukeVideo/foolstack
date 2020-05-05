import React, { useState, useEffect } from "react";

import useKey from "../utils/useKey";
import useMultiKey from "../utils/useMultiKey";

const Level = () => {
  const leftKey = useKey("ArrowLeft");
  const rightKey = useKey("ArrowRight");
  const keysPressed = useMultiKey();
  const [idledir, setIdledir] = useState("right");
  const [playerClasses, setPlayerClasses] = useState(["player right"])

  const handleDir = e => {
    if (idledir !== e) {
      setIdledir(e);
      console.log(`idledir ${idledir}`);
    }
  };


  //console.log(keysPressed);

  // if (leftKey) {
  //   handleDir("left");
  // }

  // if (rightKey) {
  //   handleDir("right");
  // }

  useEffect(()=>{
    console.log("effect")
    const GetPlayerClasses = () => {
      console.log("playerClasse")
      console.log({keysPressed})
      if (keysPressed[keysPressed.length - 1] === "ArrowRight") {
        setIdledir("right")
        setPlayerClasses(`player ${idledir} moving`);
      }
      else if (keysPressed[keysPressed.length - 1] === "ArrowLeft") {
        setIdledir("left")
        setPlayerClasses(`player ${idledir} moving`);
      }
      else {
        setPlayerClasses(`player ${idledir}`);
      }

    };
      GetPlayerClasses()
  },[setIdledir, playerClasses, setPlayerClasses, keysPressed])


  return (
    <div className="level">
      <p>
        {leftKey && "left"}
        {rightKey && "right"}
      </p>
      <div className={playerClasses} />
    </div>
  );
};
export default Level;
