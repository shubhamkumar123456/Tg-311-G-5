const userCollection = require("../models/userCollection");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const jwt_secret = "hellBoy123@";
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
var randomstring = require("randomstring");

dotenv.config();



const createUser = async (req, res) => {
  console.log(req.body); //{name:"one",email:"one@gmail.com",password:1234}
  const { name, email, password } = req.body;

  let existingUser = await userCollection.findOne({ email });

  if (existingUser) {
    return res.status(401).json({ msg: "user already registered" });
  } else {
    let hashPassword = await bcrypt.hash(password, salt);
    let data = await userCollection.insertOne({
      name: name,
      email,
      password: hashPassword,
    });
    res.status(201).json({ msg: "user registered successfully" });
  }
};

const loginUser = async (req, res) => {
  // res.send('login function is running')
  const { email, password } = req.body;
  let user = await userCollection.findOne({ email }); //{_id, email, name, pass} or null

  if (user) {
    let comparePass = await bcrypt.compare(password, user.password); //true or false

    if (comparePass) {
      // let token = await jwt.sign({} , secret)
      let token = await jwt.sign({ _id: user._id }, jwt_secret);
      return res.status(200).json({ msg: "user log in successfull", token });
    } else {
      return res.status(401).json({ msg: "wrong password" });
    }
  } else {
    return res.status(401).json({ msg: "user not found please signup" });
  }
};

const updateUser = async (req, res) => {
  let _id = req.user;
  const { name, password } = req.body;
  if (password) {
    var hashPassword = await bcrypt.hash(password, salt);
  }

  let data = await userCollection.updateOne(
    { _id: _id },
    { $set: { name, password: hashPassword } },
  );

  res.status(200).json({ msg: "user updated successfully" });
};

const deleteUser = async (req, res) => {
  let _id = req.user;
  let data = await userCollection.findByIdAndDelete(_id);
  res.status(200).json({ msg: "user deleted successfully" });
};

const dummyUpload = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
};

const forgetPassword = async (req, res) => {
    console.log(process.env.NODE_MAILER)
  const { email } = req.body;

  let user = await userCollection.findOne({ email });

  let randomString = randomstring.generate(80);

  if (user) {
    user.resetToken = randomString;
    await user.save();
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "shubhamfarainzi@gmail.com",
    pass: process.env.NODE_MAILER,
  },
});
    try {
      const info = await transporter.sendMail({
        from: '"Social Media Team" <shubhamfarainzi@gmail.com>', // sender address
        to: email, // list of recipients
        subject: "forget password request", // subject line
        text: `Dear ${user.name},
You can reset your password by visiting the following link:
http://localhost:8090/users/forgetpassword/${randomString}` // plain text body
        // html: "<b>Hello world?</b>", // HTML body
      });

      return res.json({msg:"please check your email for further information"})

      console.log("Message sent: %s", info.messageId);
      // Preview URL is only available when using an Ethereal test account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (err) {
      console.error("Error while sending mail:", err);
    }
  } else {
    return res.status(404).json({ msg: "user not found please signup" });
  }
};

const getResetToken = async(req,res)=>{
        // res.send("all is well")
        let {token} = req.params
        console.log(token)
        // let file = __dirname+'/forgetpassword.html'
        // res.sendFile(file);
        res.render('forgetpassword',{token})
}

const updatePassword = async(req, res)=>{
  const {password} = req.body;
  const {token} = req.params;

  // console.log(password , token)

  let user = await userCollection.findOne({resetToken:token}) //{_id, name, email ...}
  let hashPassword = await bcrypt.hash(password, salt);
  user.password = hashPassword
  user.resetToken = ''
  await user.save()
  res.status(200).json({msg:"password updated successfully"});
}

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  dummyUpload,
  forgetPassword,
  getResetToken,
  updatePassword
};
