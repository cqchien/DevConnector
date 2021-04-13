const { UserModel } = require("../../models");
const bcrypt = require("bcryptjs");
const _ = require("lodash");


module.exports = login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check user whether is exist or not
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: [{ msg: "Invalid Credential" }] });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({ error: [{ msg: "Invalid Credential" }] });
    }
    // return user
    const fixedUser = _.pick(user, ['name', 'email', 'avatar']);
    return res.status(200).json(fixedUser)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { msg: "Server Error" } });
    next();
  }
};
