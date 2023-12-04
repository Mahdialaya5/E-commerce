const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
   email: { type: String, required: true,trim:true,lowercase:true},
   name:{type:String,required:true},
   password : { type:String},
   newpassword : { type:String},
   img:{type:String},
   role:{type:String,enum:["guest","company","user","admin"]},
    })
const User = mongoose.model("user", userSchema)
module.exports = User