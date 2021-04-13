const express = require("express");
const getProfile = require("../../controller/profile/get");
const router = express.Router();

// @Route   /api/profile
// @desc    get profile of logged user
// @access  Public
router.get("/", getProfile);

module.exports = router;
