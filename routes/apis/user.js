const express = require("express");
const login = require("../../controller/user/login");
const register = require("../../controller/user/register");
const authorize = require("../../middleware/auth/auth");
const validateLogin = require("../../middleware/auth/validateLogin");
const validateRegisterUser = require("../../middleware/register/user");
const router = express.Router();

// @Route   /api/user/register
// @desc    Register new user
// @access  Public
router.post("/register", validateRegisterUser, register);

// @Route   /api/user/login
// @desc    login
// @access  Public
router.post("/login", validateLogin, login);
module.exports = router;
