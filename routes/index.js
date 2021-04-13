const express = require("express");
const authorize = require("../middleware/auth/auth.js");
const router = express.Router();

// @Route   /api/user
// @desc    Get all api of user
// @access  Public
router.use("/user", require("./apis/user.js"));
router.use("/profile",authorize, require("./apis/profile.js"));
// router.use("/post", require("./apis/post.js"));

module.exports = router;
