import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>lorem empsum</h1>
    </UserContextProvider>
  )
}

export default App
