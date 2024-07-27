const express = require('express')
const bodyParser  = require("body-parser")
const app = express()
const port = process.env.POST || 3000
app.use(bodyParser.json())

app.post('/conversations', (req, res) => {
    console.log(req.body);
    res.send({
        msg: "2+2=4"
    })
})


app.get('/route-handler', (req, res) => {
    // res.send("hello")
    res.json({
        name:"harkirat",
        age: 21
    })
})

app.get('/', (req, res) => {
    console.log("welcome");
    res.send("welcome")
})

app.listen(port, () => {
    console.log("listening to port 3000")
})