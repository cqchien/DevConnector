const { check, validationResult } = require("express-validator");

// Validate name, email and password when new person register
const validateRegisterUser = async (req, res, next) => {
  try {
    await check("name", "Name is require").not().isEmpty().run(req);
    await check("email", "Email is required").isEmail().run(req);
    await check("password", "Password at least 8 characters.")
      .isLength({ min: 8 })
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

module.exports = validateRegisterUser;
