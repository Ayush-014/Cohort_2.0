import React, { useState, useCallback } from "react";
import { useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [, forceRender] = useState(0);
  const numberOfTimesReRendered = useRef(0);

  const handleRender = () => {
    setCount(count+1);
  };

  numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;

  return (
  <div>
    <p>This component has rendered {numberOfTimesReRendered.current} times</p>
    <button onClick={handleRender}>Force Re-render</button>
  </div>
  );
}

// Method-1 -> using state variable
// Cons-> when 'setNumberOfTimesReRendered' will update 'numberOfTimesReRendered', there will be another ReRender but 'numberOfTimesReRendered' will count only once.
// Solution:- making it global variable.
/*import React, { useState, useCallback } from "react";
import { useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [count, setCount] = useState(0);
  const [numberOfTimesReRendered, setNumberOftimesReRendered] = useState(0);
  
  const handleRender = () => {
    setCount(count+1);
    setNumberOfTimesReRendered(numberOfTimesReRendered+1); 
  };

  return (
  <div>
    <p>This component has rendered {numberOfTimesReRendered} times</p>
    <button onClick={handleRender}>Force Re-render</button>
  </div>
  );
}
  */


// Method-2 -> using global variable
// Cons-> there should not be any declaration(especially variable declaration) outside react component cycle.
// Solution:- use useRef(optimal solution).
/*import React, { useState, useCallback } from "react";
import { useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.
let numberOfTimesReRendered=0;
export function Assignment2() {
  const [count, setCount] = useState(0);

  const handleRender = () => {
    setCount(count+1);
  };

  numberOfTimesReRendered = numberOfTimesReRendered + 1;

  return (
  <div>
    <p>This component has rendered {numberOfTimesReRendered} times</p>
    <button onClick={handleRender}>Force Re-render</button>
  </div>
  );
}
  */
