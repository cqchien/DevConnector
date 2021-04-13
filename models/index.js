const { model } = require("mongoose");
const ProfileSchema = require("./profile");
const UserSchema = require("./user");

module.exports = {
  UserModel: model("user", UserSchema),
  ProfileModel: model("profile", ProfileSchema),
};
