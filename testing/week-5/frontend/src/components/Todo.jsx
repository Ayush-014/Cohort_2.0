export default function Todos({todos}) {
    return <div>
        { todos.map((todo) => { 
            return  <>
            <h3>{todo.title}</h3>
            <h4>{todo.description}</h4>
            {todo.completed === true ? <h4>Completed</h4> : <button>Mark as complete</button>}
        </>
        }) }
    </div>
}