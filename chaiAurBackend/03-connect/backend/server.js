import express from "express";
const app = express();

app.use(express.static('dist'));

// app.get('/', (req,res) => {
//     res.send("connected");
// });

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id:1,
            title: "a joke",
            content: "this is a joke"
        },
        {
            id:2,
            title: "new joke",
            content: "this is a new joke"
        },
        {
            id:3,
            title: "another joke",
            content: "this is an anoher joke"
        },
        {
            id:4,
            title: "last joke",
            content: "this is the last joke"
        }
    ]

    res.send(jokes);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> {

    console.log(`app is listening at port ${port}`);
})