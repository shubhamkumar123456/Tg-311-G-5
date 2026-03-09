
const userCollection = require('../models/userCollection')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const jwt_secret = 'hellBoy123@'

const createUser = async(req, res)=>{
    console.log(req.body)  //{name:"one",email:"one@gmail.com",password:1234}
    const {name, email, password} = req.body

    let existingUser =await userCollection.findOne({email})

    if(existingUser){
        return res.json({msg:"user already registered"})
    }
    else{
        let hashPassword = await bcrypt.hash(password , salt)
    let data = await userCollection.insertOne({name:name, email, password:hashPassword})
    res.json({msg:"user registered successfully"})
    }  
}

const loginUser = async(req,res)=>{
    // res.send('login function is running')
    const {email, password}   = req.body;
    let user = await userCollection.findOne({email});  //{_id, email, name, pass} or null

    if(user){
        let comparePass = await bcrypt.compare(password , user.password ) //true or false

        if(comparePass){
            // let token = await jwt.sign({} , secret)
            let token = await jwt.sign({_id:user._id} , jwt_secret);
            return res.json({msg:"user log in successfull", token});
        }
        else{
            return res.status(401).json({msg:"wrong password"})
        }
    }
    else{
        return res.status(401).json({msg:"user not found please signup"})
    }

}

const updateUser = async(req,res)=>{    
    let _id = req.user
    const {name, password}  = req.body
    if(password){
        var hashPassword = await bcrypt.hash(password, salt);
    }

    let data =await userCollection.updateOne({_id:_id} , {$set:{name,password:hashPassword}});

    res.status(200).json({msg:"user updated successfully"})
}

const deleteUser =async(req,res)=>{

    let _id = req.user
    let data = await userCollection.findByIdAndDelete(_id)
    res.status(200).json({msg:"user deleted successfully"})
}


const dummyUpload = async(req,res)=>{
        console.log(req.file)
        console.log(req.body)
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    dummyUpload
}