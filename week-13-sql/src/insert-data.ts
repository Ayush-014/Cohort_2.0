import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();
    const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
    const userValues = ['john.do11e@gmail2.com', 'hashed_password_here'];

    let response = await client.query(insertUserText, userValues);
    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = ['Buy groceries', 'Milk, bread, and eggs', response.rows[0].id, false];
    await client.query(insertTodoText, todoValues);

    console.log("Entries created!");
}

createEntries();

// You are using parameterized queries (with $1, $2, etc.).
// This means the values are not directly concatenated into the SQL string, so PostgreSQL treats them strictly as values.
// This prevents any malicious input from altering the query structure.

// SQL Injection is NOT being used in your code.
// You're using best practices with parameterized queries via pg module in Node.js, which protects against SQL injection.