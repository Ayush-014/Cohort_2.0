import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counter/CounterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(); 
  function handleIncrementCounter() {
    dispatch(increment())
  }
  function handleDecrementCounter() {
    dispatch(decrement())
  }
  function handleResetCounter() {
    dispatch(reset())
  }

  return (
    <div className='container'>
      <button onClick={handleIncrementCounter}> + </button>
      <p>Count: {count} </p>
      <button onClick={handleDecrementCounter}> - </button>
      <button onClick={handleResetCounter}> 0 </button>
    </div>
  )
}

export default App
