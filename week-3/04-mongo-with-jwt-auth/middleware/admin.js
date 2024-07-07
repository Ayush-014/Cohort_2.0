const jwt = require("jsonwebtoken");
const { jwtPassword } = require("../config");
// const { response } = require("express");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const tokenArr = token.split(" ");
  const jwtToken = tokenArr[1];
  try{
      const response = jwt.verify(jwtToken, jwtPassword);

      if(response.username) {
        req.username = response.username;
        next();
      } else {
        res.status(403).json({
          msg: "Verification Failed"
        })
      }
  } catch {
    console.log("Error ocuured while verifying Admin token.");
    res.status(403).json({
      msg: "Error ocuured while verifying Admin token."
    })
  }
}

module.exports = adminMiddleware;
