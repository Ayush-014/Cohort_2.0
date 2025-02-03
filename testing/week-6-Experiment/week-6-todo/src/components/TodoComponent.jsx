import { useState } from 'react'

function TodoComponent() {
  const [count,setCount] =useState(5);
  const [Todos, setTodos] = useState([{
    id:1,
    title:"task 1",
    description:"complete POTD leetcode"
  },
  { id:2,
    title:"task 2",
    description:"complete POTD gfg"
  },
  { id:3,
    title:"task 3",
    description:"complete lec 1"
  },
  { id:4,
    title:"task 4",
    description:"complete lec 2,3"
  } ])

function addTodo() {
  setTodos([...Todos, {
    id: count,
    title: `task ${count} `,
    description: Math.floor(Math.random()*100) + "+ pullups",
  }]);
  {setCount(count+1)}
}

  return (
    <div>
      <button onClick={addTodo}> Add Todo </button>
      {Todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title,description}) {
    return <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
}

export default TodoComponent