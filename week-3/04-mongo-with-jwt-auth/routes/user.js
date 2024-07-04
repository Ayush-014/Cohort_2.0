const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const bcrypt = require("bcrypt");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  
});

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  
});

module.exports = router;
