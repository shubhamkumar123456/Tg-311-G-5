const mongoose = require('mongoose');

const connection = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/g5Graphql');
        console.log('mongodb is connected')
    } catch (error) {
        console.log("error in connecting db")
    }
}

module.exports = connection