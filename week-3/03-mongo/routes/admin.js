const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const users = require("..");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try{
    await Admin.create({
      username: username,
      password: password
      // username,
      // password
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

router.post("/courses", adminMiddleware, async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    try{
      const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price,
        published: true
    })
    } catch( e ) {
        console.log("exception caught at creating course")
        res.status(500).json({ 
          msg: "Some Error occured in creating course", 
          error: e 
        });
    }
    res.status(201).json({
         message: 'Course created successfully', 
         courseId: newCourse.id 
    })
  });

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try{
    const newCourse = await Course.find({});
  } catch( e ) {
    console.log("exception caught at fetching course")
        res.status(500).json({ 
          msg: "Some Error occured in fetching course", 
          error: e 
        });
  }
  res.status(201).json({
    courses: newCourse
  })
});

module.exports = router;
