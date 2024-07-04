const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const bcrypt = require("bcrypt");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  
});

module.exports = router;
