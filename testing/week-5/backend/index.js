const express = require("express");
const mongoose = require("mongoose");
const app = express();
const schema = require("./types");
const { todoSchema } = require("./db");
const port = 3000;

app.use(express.json());

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
    try {
        const todos = await todoSchema.find({
            completed: false
        });
        console.log(todos);
        res.status(200).json({
            todos: todos
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
            _id: updatePayload.id
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
