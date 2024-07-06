const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect('mongodb+srv://ayush014:ri2UQp2xRHG5cjIt@cluster0.tzfecbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then((data) => {
      console.log("Connection to MongoDb : Succesfull");
  });

// Define schemas
const AdminSchema = new mongoose.Schema({
    //Schema definition here
    username: { 
      type: String, 
      unique: true, 
      required: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    courses: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Course" 
    }],
});

const UserSchema = new mongoose.Schema({
    //Schema definition here
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
    title: String,
    description: String,
    price: Number,
    image: String,
    owner: String,
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
