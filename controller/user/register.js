const { UserModel } = require("../../models");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check user whether is exist or not
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ error: [{ msg: "User already exists" }] });
    }

    // Get user gravatar
    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: passwordHashed,
      avatar,
    });

    await newUser.save();

    // return JWT
    const payload = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    };

    const secret = config.get("jwtSecret");
    const expiresIn = config.get("expiresIn");
    jwt.sign(payload, secret, { expiresIn }, (error, token) => {
      if (error) throw error;
      return res.status(200).json({ token });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: { msg: "Server Error" } });
  }
};
