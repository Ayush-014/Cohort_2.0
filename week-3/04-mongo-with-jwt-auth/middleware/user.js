const jwt = require("jsonwebtoken")
const { jwtPassword } = require("../config");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
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
    console.log("Error ocuured while verifying User token.");
    res.status(403).json({
      msg: "Error ocuured while verifying User token."
    })
  }
}

module.exports = userMiddleware;
