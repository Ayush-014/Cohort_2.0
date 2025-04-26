import { getClient } from "./utils";

async function addIndex() {
    const client = await getClient();
    
    const createIndexQuery = 'CREATE INDEX idx_todos_user_id ON todos(user_id)';
    await client.query(createIndexQuery);
    
    console.log("Index added successfully on user_id column of todos table!");
}

addIndex();

// What it does:
//     It creates an index named idx_todos_user_id on the user_id column of the todos table.
// Why?
//     So that when you run queries like: "SELECT * FROM todos WHERE user_id = 123";
//     the database can quickly find all todos belonging to a specific user.

//     Without an index, the database would scan the entire todos table row-by-row to find matching 
//     user_ids.(This is called a "full table scan" and can be slow if you have lots of todos.)
//     With an index, it can jump directly to the todos for that user, making queries much faster.