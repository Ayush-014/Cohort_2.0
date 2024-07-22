import { useState } from 'react'

export default function NewTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input style={{
                padding: 10,
                margin: 10
            }} onChange={(e) => {
                setTitle(e.target.value)
            }} type="text" placeholder="title" /> <br />
            <textarea style={{
                padding: 10,
                margin: 10
            }} onChange={(e) => {
                setDescription(e.target.value)
            }}  placeholder="description" ></textarea> <br />

            <button style={{
                padding: 10,
                margin: 10
            }} onClick={() => {
                fetch("http://localhost:3000/todo",{
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "content-type": "application/json"      //app.use(express.json()) actually checks header whether data is in json or not & only let the json data pass
                    }
                })
                    .then(async (res) => {
                        const json = await res.json();
                        // console.log(json);
                        alert("Todo added");
                    })
                    .catch((err) => {
                      console.log(`error caught during fetch call. Error: ${err}`);
                    })
                    // props.setTodos([...todos, {
                    //     title,
                    //     description,
                    //     completed: false
                    // }])
            }} >Add</button>
        </div>
    );
}
