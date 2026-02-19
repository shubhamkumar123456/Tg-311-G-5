
const userCollection = require('../models/userCollection')

const createUser = async(req, res)=>{
    console.log(req.body)  //{name:"one",email:"one@gmail.com",password:1234}
    const {name, email, password} = req.body
    let data = await userCollection.insertOne({name:name, email, password})
    // res.send('create function is running')
    res.json({msg:"user registered successfully"})
}

const loginUser = async(req,res)=>{
    res.send('login function is running')
}

const updateUser = async(req,res)=>{    
    res.send('update function is running')
}

const deleteUser =async(req,res)=>{
    res.send('delete function is running')
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser
}