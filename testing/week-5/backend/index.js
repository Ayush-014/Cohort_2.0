const express = require("express")
const app = express();
const schema = require("./types");
const mongoose = require("mongoose");
const port = 3000;

app.use(express.json());

app.post("/todo", (req,res) => {
    const createPayload = req.body;
    const parsedPayload = schema.newTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs. Please validate them.",
        })
        return;
    }
    //put in mongoDB
})

app.get("/todos", (req,res) => {
    
})
app.put("/todoEdit", (req,res) => {
    const updatePayload = req.body;
    const parsedPayload = schema.updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs.Please validate inputs.",
        })
        return;
    }
    //update them
})

app.listen(port,() => {
    console.log(`app is listening to port ${port}`)
}) 