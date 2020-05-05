import { useState, useEffect } from "react";

export default function useMultiKey() {
  const [keysPressed, setKeyPressed] = useState([]);


  useEffect(() => {
  function downHandler({key}) {
    console.log("DOWN");
    console.log(key)
    if (!keysPressed.includes(key)) {
      setKeyPressed(keysPressed.push(key));
      console.log(keysPressed);
    }
  }

  const upHandler = ({ key }) => {
    console.log("UP")
    console.log(typeof(key));
    console.log(key)
    //array.splice(i, 1);
    //
    console.log(`keysPressed up ${keysPressed}`)
    const keyIndex = keysPressed.indexOf(key)
    console.log(keyIndex)
    setKeyPressed(keysPressed.splice(keyIndex,1));
    console.log(keysPressed);
  };
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

 return keysPressed;
}
