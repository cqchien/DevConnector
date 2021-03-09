const express = require("express");
const getAll = require("../../controller/user/getAll");
const validateRegisterUser = require("../../middleware/register/user");
const router = express.Router();

// @Route   /api/user
// @desc    Get all user
// @access  Public
router.post("/", validateRegisterUser, getAll);

module.exports = router;
