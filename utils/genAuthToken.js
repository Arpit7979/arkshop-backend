const JWT = require("jsonwebtoken");

const genAuthToken = (user) => {
  const mysectret = process.env.JWT_SECRET;
  const token = JWT.sign({
    _id:user.id,
    name:user.name,
    email:user.email,
  },mysectret);

  return token;
}

module.exports = genAuthToken;