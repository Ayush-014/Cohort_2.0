import { createContext } from "react";

//export const CountContext = createContext(0); -> for a single vlue to be passed.

// Option 1: Provide a default value (useful to avoid undefined errors)
export const CountContext = createContext({
    count: 0, // Default count
    setCount: () => { } // Placeholder function to avoid undefined errors
});


{/**
    
    Prop drilling is a situation in React where you pass props through multiple intermediate components just to reach a deeply nested component that actually needs the data.
    
    Why is Prop Drilling a Problem?
        1. It makes code harder to maintain when many components must pass down props unnecessarily.
        2. If you add or remove a prop, you must update multiple components.
        3. It reduces reusability because some components exist only to pass props.
    
    How to Avoid Prop Drilling?
        1. Context API (Best for Global State)
            React's Context API allows you to share state without manually passing props at each level.
        2. State Management Libraries (Redux, Zustand, Jotai)
            For larger applications, you can use Redux, Zustand, or Recoil to manage global state efficiently.
    
*/}
