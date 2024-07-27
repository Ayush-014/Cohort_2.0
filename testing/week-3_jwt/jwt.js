const jwt = require("jsonwebtoken");

//decode, verify, generate

const value = {
    name: "harkirat",
    accountNumber: 123123123
}

//jwt
const token = jwt.sign(value, "secret");

// this token hasbeen generated using this secret, and hence
//  this token can only be verified using this secret