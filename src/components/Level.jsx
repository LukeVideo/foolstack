import React, { useState, useEffect } from "react";

import useKey from "../utils/useKey";

const Level = () => {
  const left = useKey("ArrowLeft");
  const right = useKey("ArrowRight");

  const [idleDirection, setIdleDirection] = useState("right");
  const [classes, setClasses] = useState({
    player: "player",
    dir: "",
    idle: "right"
  });

  const playerClasses = () => {
    const classesStr = Object.values(classes).join(" ");
    console.log(Object.values(classes));
    console.log(classesStr);
    // if (left && !classes.includes("dirRight")){
    //   if (!classes.includes("dirLeft")){
    //     setClasses([...classes,
    //               "dirLeft"])
    //   }
    // }

    // console.log(classes)
    // if (right && !classes.includes("dirLeft")){
    //   if (!classes.includes("dirRight")){
    //     setClasses([...classes,
    //       "dirRight"])
    //   }
    // console.log(classes)

    // }
    // else if (!right && !left){
    //   if (!classes.includes(idleDirection))
    //   setClasses([...classes,
    //       idleDirection])
    // }
    return classesStr;
  };

  /*

  */

  useEffect(() => {
    if (left) {
      setClasses({ ...classes, dir: "dirLeft", idle: "left" });
    } else {
      setClasses({ ...classes, dir: "" });
    }
    console.log(classes);
  }, [left]);

  useEffect(() => {
    if (right) {
      setClasses({ ...classes, dir: "dirRight", idle: "right" });
    } else {
      setClasses({ ...classes, dir: "" });
    }
    console.log(classes);
  }, [right]);

  return (
    <div className="level">
      <div className={playerClasses()} />
    </div>
  );
};
export default Level;
