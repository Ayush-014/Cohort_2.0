import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PriceCart from "./components/PriceCart"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-base">
      <PriceCart 
          title="Next Payout"
          amt="2,312.23"
          order="23"
          date="Today"
          time="4:00 PM"
      />
    </div>
  )
}

export default App
