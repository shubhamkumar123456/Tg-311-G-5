const express = require('express');
const app = express();
const port = 8090;
const { sequelize } = require("./models");

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const postRouter = require('./routes/postRoutes')
const userRouter = require('./routes/userRoutes')

app.use('/users', userRouter)
app.use('/posts', postRouter)

sequelize.authenticate()
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));



app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});