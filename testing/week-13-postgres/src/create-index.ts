import getClient from "./utils";

async function addIndexToData() {
    const client = await getClient();

    const addIndexQuery = `CREATE INDEX idx_todos_user_id ON todos(user_id)`
    await client.query(addIndexQuery);
    
    console.log("Index added successfully on user_id column of todos table!");
}

addIndexToData();