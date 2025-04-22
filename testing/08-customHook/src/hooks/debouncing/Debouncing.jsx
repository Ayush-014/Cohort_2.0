import React, { useEffect, useState } from 'react'

export default function Debouncing({duration}) {
    const [input, setInput] = useState('')
    const [debouncedInput, setDebouncedInput] = useState('')

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInput(input)
        }, duration)
        return () => clearTimeout(handler)  // clears the previous timer
    },[input])

    useEffect(() => {
        console.log("search bar contain text: ", debouncedInput)
    }, [debouncedInput])

    return (
        <div>
            <input
             type='text'
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder='search...'
             />
        </div>
    )
}

