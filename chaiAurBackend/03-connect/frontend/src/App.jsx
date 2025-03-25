import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data);
        { console.log(res.data); }
      })
      .catch((err) => {
        console.log("Error: " + err)
      })
  },[])
  return (
    <div>
        <h1>Connecting Frontend and Backend</h1>
        <p>JOKES: {jokes.length}</p>

        {
          jokes.map((joke,index) => (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          ))
        }
    </div>
    )
}

export default App
