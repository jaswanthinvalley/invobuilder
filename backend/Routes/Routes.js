const express = require("express")
const app = express()
const bcrypt = require("bcrypt")


export default function Signup(req,res) {
    const {name,email,password} = req.body
    const bcrypt = bcrypt.hash(password,10)

}