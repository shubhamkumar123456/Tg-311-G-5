const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    method: ["get", "post"],
  },
});

const port = 3000;

let users = {};  // in key we save socketId in value we save username

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on('join',(username)=>{
    console.log(username)
    users[socket.id] = username;

    io.emit('sendMessage',{
        type:'system',
        msg:`new user ${username} joined`
    })

    socket.on('send',(inputValue)=>{
             io.emit('sendMessage',{
            type:users[socket.id],
            msg:inputValue
    })
    })
  })



});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
