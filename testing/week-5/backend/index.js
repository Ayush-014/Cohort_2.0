const express = require("express");
const mongoose = require("mongoose");
const app = express();
const schema = require("./types");
const { todoSchema } = require("./db");
const cors = require("cors");
const port = 3000;

app.use(express.json());        //app.use(express.json()) actually checks header whether data is in json or not & only let the json data pass
app.use(cors());    //any frontend can call this
// app.use(cors({
//     origin: "http://localhost:5173"  //only localhost:5173 can call this backend
// }));

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = schema.newTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs. Please validate them.",
        });
        return;
    }

    try {
        const newTodo = await todoSchema.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        });

        res.status(201).json({
            msg: "New todo creation successful",
            _id: newTodo._id
        });
    } catch (err) {
        res.status(500).json({
            msg: "Internal server error",
            error: err.message
        });
    }
});

app.get("/todos", async (req, res) => {
    let completedTodos = [];
    let incompleteTodos = [];
    try {
        const todos = await todoSchema.find();
        completedTodos = todos.filter((todo) => {
            return todo.completed === true;
        });
        incompleteTodos = todos.filter((todo) => {
            return todo.completed === false;
        });

        res.status(200).json({
            todos: todos,
            incompleteTodos: incompleteTodos,
            completedTodos: completedTodos
        });
    } catch (err) {
        res.status(500).json({
            msg: "Internal server error",
            error: err.message
        });
    }
});

app.put("/todoEdit", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = schema.updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs. Please validate inputs.",
        });
        return;
    }

    try {
        await todoSchema.updateOne({
            _id: updatePayload._id
        }, {
            completed: true
        });

        res.status(200).json({
            msg: "Todo updated successfully"
        });
    } catch (err) {
        res.status(500).json({
            msg: "Internal server error",
            error: err.message
        });
    }
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
