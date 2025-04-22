import React, { useDeferredValue, useState } from "react";

function BigListFiltering({input}) {
    const items = Array.from({length: 1000}, (_,i) => `Item ${i} ${input}`);
    //equivalent basic array version of above declaration is:-
    // const items = [];
    // for (let i = 0; i < 10000; i++) {
    //     items.push(`Item ${i} ${input}`);
    // }

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default function DeferredValue() {
    const [input, setInput] = useState("")
    const deferredInput = useDeferredValue(input);   // input is fast, but deferredInput updates slowly thus controls slow rendering
    
    return (
        <div>
            <input
             type="text"
             placeholder="search..."
             value={input}
             onChange={(e) => setInput(e.target.value)}
             />
             <BigListFiltering input={deferredInput} />
        </div>
    )
}



// Array.from() is a method that creates a new array from an iterable or array-like object.

// Inside Array.from():
// { length: 10000 } : This creates an array-like object with 10,000 empty slots.
//                     It does not contain actual values, just placeholder slots.
// (_, i) => \Item ${i} ${input}`` : This is a mapping function. 
//                                   '_' is the first argument (value at index, ignored here).
//                                   'i' is the index (from 0 to 9999).

// It returns strings like: "Item 0 hello", "Item 1 hello", ..., "Item 9999 hello"