const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
})
const BlogSchema = new mongoose.Schema({
    title : String,
    image : String,
    content : String,
    author : String,    
})
const UserModel = mongoose.model("user",UserSchema)
const BlogModel = mongoose.model("blogs",BlogSchema)


module.exports = {
    UserModel,
    BlogModel
}