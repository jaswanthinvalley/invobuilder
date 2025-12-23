const Express = require("express")
const app = Express() 
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const bcrypt = require("bcrypt")
const jwt =  require("jsonwebtoken")
const dburl = process.env.URL
const mongoose = require("mongoose")
const { UserModel, BlogModel, ProfileModel } = require("./Models/Models")


app.use(Express.json())


async function dbconnect() {
const dbconnet = await mongoose.connect(dburl)
.then((result) => console.log("db connect sucessful") )
.catch((err) => console.log("the error is : ",err))
}

app.post("/createprofile",async function CreateProfile (req,res) {
    const {
        username,bio,email,twitter,
        instagram,github,location
    } = req.body
const profile = await ProfileModel.create({
    username : username,
    bio : bio,
    email : email,
    twitter : twitter,
    instgram : instagram,
    github : github,
    location : location
})
.then((result) => res.json({
    message  : "profile creation sucessful"
}))
.catch(() => res.json({
    message : "error in creating the profile"
}) )

})
app.post("/createblog",async function CreateBlog(req,res) {
    const{title,image,content,author} = req.body
    const createblog = await BlogModel.create({
        title : title,
        image : image,
        content : content,
        author : author,


    })
    .then((result) => res.json({
        message : "blog created sucessfully"
    }))
    .catch((err) => res.json({
        message : "error occured"
    }))

}) 
app.delete("/deleteblog",async function DeleteBlog(req,res) {
const {id}  = req.body
const deleteblog = await BlogModel.findByIdAndDelete(id)
.then((result) => res.json({
    message : "the blog is deleted sucessfully"
}))
.catch({
    message : "blog not deleted"
})
})



app.post("/signup",async function Signup(req,res) {
    const {name,email,password} = req.body
        if(!name || !email || !password) {
        return res.status(404).json({
            message : "details are missing "
        })
    } 
    const hashedpassword = await bcrypt.hash(password,10)
    console.log("the hashed password is",hashedpassword)

    const CreateUser = await UserModel.create({
        name : name,
        email : email,
        password : hashedpassword
    })
    .then((result) => res.json({
        message : "user create sucessfully"
    }))
})



app.post("/signin", async(req,res) => {

    const {email,password} = req.body
    if(!email || !password){
        res.json({
            message : "please enter all the data"
        })
    }
    const user = await UserModel.findOne({email})
    const verify = await bcrypt.compare(password,user.password)
    const token = await jwt.sign({id : user._id},"secret")
    res.cookie("token",token)

        res.json({
        message : "user found",
        
        verify : verify,
        cookie : "cookie sent"

    })


    //console.log(token)

})



/*async function hash() {
const hash = await bcrypt.hash("kjhdkjfhdkj",10)
console.log(hash)
}
hash() */

dbconnect()
app.listen(port,()=> console.log(`the server is running in the port ${port}`))