const express = require('express');
const app = express();
const port = 8090;
const {graphqlHTTP} = require('express-graphql');

const connection = require('./config/db');
const { Schema } = require('mongoose');
const Auth = require('./middleware/Auth');
connection()

app.use('/graphql',graphqlHTTP((req)=>({
    Schema,
    graphiql:true,
    context:{
        user:Auth(req)
    }
})))


app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})