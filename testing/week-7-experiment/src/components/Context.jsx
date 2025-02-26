import { createContext } from "react";

//export const CountContext = createContext(0); -> for a single vlue to be passed.

// Option 1: Provide a default value (useful to avoid undefined errors)
export const CountContext = createContext({
    count: 0, // Default count
    setCount: () => { } // Placeholder function to avoid undefined errors
});
