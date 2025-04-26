import getClient from "../utils";

async function getUserAndTodosSeparateQueries(userId: number) {
    const client = await getClient();

    const userQuery = `SELECT * FROM users WHERE id = $1`;
    const userRes = await client.query(userQuery, [userId]);
    const userData = userRes.rows;
    console.log("USERS: ", userData);

    const todosQuery = `SELECT * FROM todos WHERE id = $1`;
    const todosRes = await client.query(todosQuery, [userId]);
    const todosData = todosRes.rows;

    console.log("TODOS: ", todosData);
}

getUserAndTodosSeparateQueries(1);