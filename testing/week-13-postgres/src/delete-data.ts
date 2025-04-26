import getClient from "./utils";

async function deleteUserTodo(todoId: number) {
    const client = await getClient();

    const deleteTodoText = `DELETE FROM todos WHERE id = $1`;
    await client.query(deleteTodoText);

    console.log(`TODO WITH ID: ${todoId} DELETED!`);
}

const todoIdToDelete = 1;
deleteUserTodo(todoIdToDelete);