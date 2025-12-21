const Express = require("express")
const app = Express() 
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const bcrypt = require("bcrypt")
const dburl = process.env.URL
const mongoose = require("mongoose")
const { UserModel } = require("./Models/Models")



async function dbconnect() {
const dbconnet = await mongoose.connect(dburl)
.then((result) => console.log("db connect sucessful") )
.catch((err) => console.log("the error is : ",err))
}
dbconnect()

try {
    app.post("/signup",async function Signup(req,res) {
    const {name,email,password} = req.body
    if(!name || !email || !password) {
        return res.status(404).json({
            message : "details are missing "
        })
    }
    const CreateUser = UserModel.create(name,email,password)
    .then((result) => res.json({
        message : "user create sucessfully"
    }))
})
    
} catch (error) {
    console.log("error in creating the user")
}
/* async function login(req,res) {
    const {email, password} = req.body
    if(!email || !password) {

    }
} */



/*async function hash() {
const hash = await bcrypt.hash("kjhdkjfhdkj",10)
console.log(hash)
}
hash() */


app.listen(port,()=> console.log(`the server is running in the port ${port}`))