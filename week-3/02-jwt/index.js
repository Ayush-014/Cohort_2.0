const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string.min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if(!usernameResponse || !passwordResponse)
      return null;
      
  const signature =  jwt.sign({
      username
  },  jwtPassword)
  return signature;
}

function verifyJwt(token) {
  try{
      jwt.verify(token, jwtPassword);
      return true;
  }catch(err){
      console.log("jwt verification failed!")
  }
  return false;
}

function decodeJwt(token) {
  const decoded = jwt.decode(token);
  return !(decoded === null);
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};