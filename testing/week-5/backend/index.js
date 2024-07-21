const express = require("express")
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todo", (req,res) => {

})
app.get("/todos", (req,res) => {
    
})
app.putt("/editTodo", (req,res) => {
    
})

app.listen(port,() => {
    console.log(`app is listening to port ${[p]}`)
}) 