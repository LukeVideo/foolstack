import { useState, useEffect } from "react";

export default function useMultiKey() {
  const [keysPressed, setKeyPressed] = useState([]);

  function downHandler({ key }) {
    if (!keysPressed.includes(key)) {
      setKeyPressed(keysPressed.push(key));
      //  console.log(keysPressed);
    }
  }

  const upHandler = ({ key }) => {
    //console.log(`keyup ${key}`);
    //array.splice(i, 1);
    // indexOf
    setKeyPressed(keysPressed.splice(keysPressed.indexOf(key, 1)));
    console.log(keysPressed);
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keysPressed;
}
