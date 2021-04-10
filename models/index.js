const mongoose = require("mongoose");
const UserSchema = require("./user");

module.exports = {
  UserModel: mongoose.model("user", UserSchema),
};
