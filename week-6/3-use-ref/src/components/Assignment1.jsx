import { useState } from "react";
import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const [inputText,setInputText] = useState("");
  const inputRef = useRef();
  // method-1 ->without useRef
  // useEffect(() => {
  //   document.getElementById("inputBox").focus();
  // }, []);

  // const handleButtonClick = () => {
  //   document.getElementById("inputBox").focus();
  // }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        id="inputBox"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter some text"
      />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
