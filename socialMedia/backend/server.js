const express = require('express');
const app = express()
const port = 8090;
const connection = require('./config/db')  //  function
connection()

const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')


//middleware are functions that have the access of requesting to an object responding to an object they ccan also modify the request and response. 

// 

app.use((req,res,next)=>{
    console.log("hello i am middleware")
    next()
})

app.use(express.json())  //parse the data
app.get('/' , (req,res)=>{
    res.send('welcome page')
})

app.use('/users', userRouter);
app.use('/posts', postRouter);

// example --> http://localhost:8090/users/signup --> createUser()
// example --> http://localhost:8090/users/login --> loginUser()

app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`)
})