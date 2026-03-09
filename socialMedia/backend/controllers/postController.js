
const postCollection = require('../models/postCollection');


const createPost = async(req, res)=>{
    // console.log(req.body)
    // console.log(req.file)
   const {title} = req.body
   const file = req.file.filename
   const userId = req.user;

   let data = await postCollection.insertOne({title, file,userId})

   res.status(201).json({msg:"post created successfully"})
}

const getPosts = async(req, res)=>{
    res.send("get post is running");
}
const updatePost = async(req, res)=>{
    res.send("update post is running")
}
const deletePost = async(req, res)=>{
    res.send("delete post is running")
}

module.exports = {
    createPost,
    getPosts,
    updatePost,
    deletePost
}