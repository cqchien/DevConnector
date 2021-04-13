const { check, validationResult } = require("express-validator");

// Validate name, email and password when new person register
const validateLogin = async (req, res, next) => {
  try {
    await check("email", "Email is required").isEmail().run(req);
    await check("password", "Password is required.")
      .exists()
      .run(req);

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ error: result.array() });
    }
  } catch (error) {
    console.log(error);
  }
  next();
};

module.exports = validateLogin;
