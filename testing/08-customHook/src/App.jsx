import React, { useEffect, useState } from 'react'
import './App.css'
import Debouncing from './hooks/debouncing/Debouncing'
import DeferredValue from './hooks/useDeferredValue/DeferredValue'

function App() {
  const [render, setRender] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setRender(false)
    }, 10000)

  },[])

  return (
    <>
     { render ? <MyComponent /> : <div></div>}
     {/* <Debouncing duration={1500} /> */}
     {/* <DeferredValue /> */}
    </>
  )
}

const increment = () => {
  setCount( count => count+1)
}
const decrement = () => {
  setCount( count => count-1)
}

function MyComponent() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Mounted")
    return () => {
      console.log("UnMounted");
    }
  },[])

  return (
    <div >
      {/* <p> {count} </p>
            <div>
              <button
              onClick={increment}
              > + </button>
      
              <button
              onClick={decrement}
              > - </button>
            </div> */}
      from inside my component
    </div>
  )
}

export default App





