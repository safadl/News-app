const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    picture:String 

})
mongoose.model("user",userSchema)