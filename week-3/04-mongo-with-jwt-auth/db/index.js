const mongoose = require("mongoose");
const MongoUrl = "mongodb+srv://ayush014:ri2UQp2xRHG5cjIt@cluster0.tzfecbn.mongodb.net/courseSellingApp";

try{
    mongoose.connect(MongoUrl)
      .then( (response) => {
          console.log("Connection to MongoDb: Successfull. Response->" + response);
      })
} catch {
  console.log("Connection to MongoDb: Failed.");
}

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    courses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses"
    }]
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: { 
    type: String, 
    unique: true, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
    title: String,
    description: String,
    price: Number,
    image: String,
    published: { 
      type: Boolean, 
      default: true 
    },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
