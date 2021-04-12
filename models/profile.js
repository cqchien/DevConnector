const { Schema } = require("mongoose");

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId;
    ref: 'user'
  },
  company: {
    type: String,
  },
  websilte: {
    type: String,
  },
  location: {
    type:String,
  },
  status: {
    type: String,
  },
  skills: {
    type: [String],
    require: true,
  },
  bio: {
    type: String,
  },
  githubUsername: {
    type: String,
  }

});

module.exports = ProfileSchema;
