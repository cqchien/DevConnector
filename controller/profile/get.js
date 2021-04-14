const { ProfileModel } = require("../../models");

const getProfile = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const profileWithUser = await ProfileModel.findOne({
      user: userId,
    }).populate("user", ["name, avatar"]);
    if (!profileWithUser) {
      return res.status(404).json({ error: { msg: "User not found" } });
    }
    return res.status(200).json({ profileWithUser });
  } catch (error) {
    console.log(error);
    return res.status(500).res.status(500).json({ error: { msg: "Server Error" } });
  }
};

module.exports = getProfile;
