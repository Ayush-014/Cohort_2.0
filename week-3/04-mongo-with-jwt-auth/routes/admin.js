const { Router } = require("express");
const jwt = require("jsonwebtoken")
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
// const bcrypt = require("bcrypt");
const { jwtPassword } = require("../config")

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  try{
    await Admin.create({
      username,
      password
      // username: username,
      // password: password
    })
    } catch( e ) {
        console.log("exception caught at creating Admin")
        res.status(500).json({ 
          msg: "Some Error occured in creating Admin Account", 
          error: e 
        });
      }
    res.status(201).json({
        msg: "Admin created successfully"
    });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await Admin.find({
    username,
    password
  });

  if(user) {
    const payload = {
      username: username,
      admin: true
    };

    const signature = jwt.sign(payload, jwtPassword);
    
    res.status(201).json({
      signature
    })
  } else {
    res.status(411).json({
      msg: "Admin Sigin Failed"
    })
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  const published = req.body.published;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
    published
  });
  res.status(201).json({
    message: 'Course Created Successfully', 
    courseId: newCourse.id 
})
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try{
    const newCourse = await Course.find({
      published: 1
    });
    res.status(201).json({
      courses: newCourse
    })
  } catch( e ) {
    console.log("exception caught at fetching course")
    res.status(500).json({ 
        msg: "Some Error occured in fetching course", 
        error: e 
    });
  }
});

module.exports = router;
