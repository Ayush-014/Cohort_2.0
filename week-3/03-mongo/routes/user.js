const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username,
    password
  })
    .catch( () => {
      console.log("exception caught at creating User");
      res.status(403).json({
        msg: "User creation: Failed"
    })
    })
  res.status(201).json({
      msg: "User creation: Successfull"
  })
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const publishedCourses = await Course.find({});
  
  res.json({
    courses: publishedCourses
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const { courseId } = req.params;
  const username = req.headers.username;

  User.updateOne({
    username: username
  }, {
    "push": {
        publishedCourses: courseId
    }
  })
    .catch( (e) => {
      console.log(e);
      res.status(403).json({
        msg: e
      })
    })
  res.json({
    msg: "Course Purchased Successfully"
  });

});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username
  });
  const courses = await Course.find({
    _id: {
      "$in": user.purchasedCourses
    }
  });
  res.json({
    courses: courses
  });
});

module.exports = router;
