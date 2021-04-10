const express = require("express");
const register = require("../../controller/user/register");
const validateRegisterUser = require("../../middleware/register/user");
const router = express.Router();

// @Route   /api/user
// @desc    Register new user
// @access  Public
router.post("/register", validateRegisterUser, register);

module.exports = router;
