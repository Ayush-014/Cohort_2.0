const zod = require("zod");

const newTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    newTodo,
    updateTodo
}