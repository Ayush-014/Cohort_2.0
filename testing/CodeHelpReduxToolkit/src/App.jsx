import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/CounterSlice';

function App() {
  const [amount,setAmount] = useState(0)
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
  function handleAmountSetterCounter() {
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className='container'>
      <button onClick={handleIncrementCounter}> + </button>
      <p>Count: {count} </p>
      <button onClick={handleDecrementCounter}> - </button>
      <button onClick={handleResetCounter}> 0 </button>
      <br/>
      <input
      type='Number'
      placeholder='Enter Amount'
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      />
      <br/>
      <button onClick={handleAmountSetterCounter}> Inc By Amount </button>
    </div>
  )
}

export default App
