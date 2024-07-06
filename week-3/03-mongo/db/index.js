const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect('mongodb+srv://ayush014:ri2UQp2xRHG5cjIt@cluster0.tzfecbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then((data) => {
      console.log("Connection to MongoDb : Succesfull");
  });

// Define schemas
const AdminSchema = new mongoose.Schema({
    //Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    //Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
      type: mongoose.Schema.type.ObjectId,
      ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
