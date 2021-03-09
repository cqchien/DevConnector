const express = require("express");
const getAll = require("../../controller/user/getAll");
const router = express.Router();

// @Route   /api/user
// @desc    Get all user
// @access  Public
router.get("/", getAll);

module.exports = router;
