const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { jwtPassword } = require("../config")

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  try {
    await User.create({
      username,
      password
      // username: username,
      // password: password
    })
  } catch (e) {
    console.log("exception caught at creating User")
    res.status(500).json({
      msg: "Some Error occured in creating User Account",
      error: e
    });
  }
  res.status(201).json({
    msg: "User created successfully"
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username,
    password
  });

  if (user) {
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
      msg: "User Sigin Failed"
    })
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const newCourse = await Course.find({
      published: 1
    });
    res.status(201).json({
      courses: newCourse
    })
  } catch (e) {
    console.log("exception caught at fetching course")
    res.status(500).json({
      msg: "Some Error occured in fetching course",
      error: e
    });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;

  await User.updateOne({
    username: req.username
  }, {
    "$push": {
      purchasedCourses: courseId
    }
  })
  res.json({
    message: "Purchase complete!"
  })
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username
});

const courses = await Course.find({
    _id: {
        "$in": user.purchasedCourses
    }
});

res.json({
    courses: courses
})
});

module.exports = router;
