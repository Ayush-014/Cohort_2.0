const mongoose = require('mongoose');

console.log("Connecting to mongoDB...........");
mongoose.connect('mongodb+srv://ayush014:ri2UQp2xRHG5cjIt@cluster0.tzfecbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});


const newTodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: Boolean
})

const todoSchema = mongoose.model("todos", newTodoSchema);

module.exports = {
    todoSchema
}