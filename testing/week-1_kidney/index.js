const express = require('express')
const bodyParser  = require("body-parser")
const app = express()
const port = process.env.POST || 3000
app.use(bodyParser.json())

const users = [
    {
        name : "john",
        kidneys :[{
            healthy : false,
            healthy : true,
            healthy : false,
            healthy : false
        }]
    }
];

app.post('/', (req, res) => {
    const newKidney = req.body.healthy;
    users[0].kidneys.push({
        healthy : false
    })
    res.send("Added")
})

app.patch('/',(req,res) => {
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.send("Done")
})


app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const kidneyLength = johnKidneys.length;
    let noOfHealthyKidneys = 0;
    let noOfUnhealthyKidneys = 0;
    for(let i=0; i<kidneyLength; i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys = noOfHealthyKidneys + 1;
        }
    }
    noOfUnhealthyKidneys = kidneyLength - noOfHealthyKidneys;
    
    res.json({
        name:`john`,
        kidneys : `${kidneyLength}`,
        healthyKidneys : `${noOfHealthyKidneys}`,
        unhealthyKidneys : `${noOfUnhealthyKidneys}`,
    })
})

app.listen(port, () => {
    console.log("listening to port 3000")
})