const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    bio:{
        type:String,
    },
    profilePic:{
        type:String,
    },
    coverPic:{
        type:String,
    },
   
},{timestamps:true})

module.exports = mongoose.model('users', userSchema )

