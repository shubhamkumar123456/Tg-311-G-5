const bcrypt = require("bcrypt");
const { User } = require("../models");

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    res.json(user);
};

exports.getAllUser = async(req,res)=>{
    const users = await User.findAll();
    res.json(users)
}