import getClient from "./utils";

async function updateTodoData(todoId: number) {
    const client = await getClient();
    const updateTodoText = `UPDATE todos SET done = $1 WHERE id = $2`;
    await client.query(updateTodoText,[true, todoId]);

    console.log(`TODO WITH ID: ${todoId} UPDATED (COMPLETED)!`);
}

const todoIdToUpdate = 1;
updateTodoData(todoIdToUpdate);