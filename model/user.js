const mongoose = require('mongoose') 

mongoose.connect('mongodb://127.0.0.1:27017/project1');

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    role : String 
})

const usermodel = mongoose.model("user",userSchema)

module.exports = {usermodel}