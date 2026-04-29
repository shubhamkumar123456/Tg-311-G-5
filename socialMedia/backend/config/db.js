const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

async function connection(){
   try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@socialmediag5.pjeptuw.mongodb.net/?appName=socialMediaG5`)

   console.log("mongodb connected successfully")
   } catch (error) {
    console.log('error in connecting db', error)
   }
}

module.exports = connection