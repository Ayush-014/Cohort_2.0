const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const users = require("..");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
      username: username,
      password: password
      // username,
      // password
    })
      .catch( () => {
        console.log("exception caught at creating Admin")
      })
    res.json({
        msg: "Admin created successfully"
    })

      // .then( (value) => {
      //   if(value) {
      //     res.status(403).json({
      //         msg: "Already exists as Admin"
      //     })
      //   } else {
      //     res.
      //   }
      // })
});

router.post("/courses", adminMiddleware, async (req, res) => {
  
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  
});

module.exports = router;
