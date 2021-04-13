const { UserModel } = require("../../models");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");


module.exports = login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check user whether is exist or not
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: [{ msg: "Invalid Credential" }] });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: [{ msg: "Invalid Credential" }] });
    }

    // return JWT
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    const secret = config.get("jwtSecret");
    const expiresIn = config.get("expiresIn");
    jwt.sign(payload, secret, { expiresIn }, (error, token) => {
      if (error) throw error;
      return res.status(200).json({ token });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { msg: "Server Error" } });
    next();
  }
};
