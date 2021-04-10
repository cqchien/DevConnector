const jwt = require("jsonwebtoken");
const config = require("config");
const authorize = (req, res, next) => {
  // Get token from header
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({ error: { msg: "Authorized denied" } });
  }
  try {
    const secret = config.get("jwtSecret");
    const decoded = jwt.verify(token, secret);

    req.user = decoded;
    next()
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: { msg: "Token is invalid" } })
  }
};

module.exports = authorize;
