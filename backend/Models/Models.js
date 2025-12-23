const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const BlogSchema = new mongoose.Schema({
  title: String,
  image: String,
  content: String,
  author: String,
});

const ProfileSchema = new mongoose.Schema(
  {
    username: String,
    bio: String,
    email: String,
    twitter: String,
    instgram: String,
    github: String,
    location: String,
  },
  { timestamps: true }
);
const UserModel = mongoose.model("user", UserSchema);
const BlogModel = mongoose.model("blogs", BlogSchema);
const ProfileModel = mongoose.model("userprofile", ProfileSchema);

module.exports = {
  UserModel,
  BlogModel,
  ProfileModel,
};
