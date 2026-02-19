const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2,
        maxLength:250
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:['male','female']
    },
    profilePic:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF02Jj8T2t7PdkytAw42HDuuSz7yXguKn8Lg&s"
    },
    coverPic:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDApJo83lWctENTMNPOuJ9fUdHXaGCXgUgVg&s"
    }
},{timestamps:true})

// module.exports = mongoose.model('collectionName'  , structureToFollow(rules to follow) )
module.exports = mongoose.model('users',userSchema);