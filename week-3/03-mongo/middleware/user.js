const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  Users.findOne({
    username: username,
    password: password
  })
    .then( (value) => {
      if(value)
        next();
      else {
        res.status(403).json({ 
          msg : "User Not Found"
        })
      }
    })
}

module.exports = userMiddleware;
