import getClient from "./utils";

async function getUsersData() {
    const client = await getClient();
    const usersDataText = `SELECT * FROM users`;
    const usersResponse = await client.query(usersDataText);

    console.log("USERS: ");
    usersResponse.rows.forEach(user => {
        console.log(`ID: ${user.id} EMAIL: ${user.email}`);
    });
}

async function getUserDataFromEmail(email: string) {
    const client = await getClient();
    const usersDataText = `SELECT * FROM users WHERE email = $1`;
    const usersResponse = await client.query(usersDataText,[email]);

    console.log(`USER HAVING EMAIL ${email}: `);
    usersResponse.rows.forEach(user => {
        console.log(`ID: ${user.id} EMAIL: ${user.email}`);
    });
}

async function getTodosData(user_id: number) {
    const client = await getClient();
    const todosDataText = `SELECT * FROM todos WHERE user_id = $1`;
    const todosResponse = await client.query(todosDataText,[user_id]);

    console.log(`TODOS HAVING USER_ID ${user_id}: `);
    todosResponse.rows.forEach(todo => {
        console.log(`TD: ${todo.id} TITLE: ${todo.title} DESCRIPTION: ${todo.description} DONE: ${todo.done}`);
    });
}

getUsersData();

getUserDataFromEmail("ayush12@gmail.com");

const userIdToFetch = 1;
getTodosData(userIdToFetch);