import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {    //state-> jo bhi current state hai; action-> jo bhi data pass hua h
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

// individual reducers ko bhi export krna pdega-> components k kaam aaenge (syntax will be almost same everytime)
export const {addTodo, removeTodo} = todoSlice.actions

//sare reducers ko bhi export krna pdega
export default todoSlice.reducer
//both of above exports are mandatory