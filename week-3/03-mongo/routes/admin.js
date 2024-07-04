const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const users = require("..");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  
});

router.post("/courses", adminMiddleware, async (req, res) => {
  
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  
});

module.exports = router;
