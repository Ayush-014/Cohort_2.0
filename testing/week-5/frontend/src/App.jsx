import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NewTodo from "./components/NewTodo"
import Todo from "./components/Todo"

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async (res) => {
      const json = await res.json();
      // console.log(json);
      setTodos(json.todos);
    })
    .catch((err) => {
      console.log(`error caught during fetch call. Error: ${err}`);
    })
  
    return (
    <div>
      hi there
      <NewTodo setTodos={setTodos}/>
      <Todo todos={todos} ></Todo>
    </div>
  )
}

export default App
