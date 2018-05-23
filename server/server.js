const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname,'../public');
// console.log(__dirname + '/../public' );
// console.log(publicPath);
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);

var io = socketIO(server);
app.use(express.static(publicPath));
io.on('connection',(socket)=>{
  console.log("New User connected");

  socket.on('disconnect',()=>{
    console.log('User was disconencted');
  })
});

// socket.on('disconnect',()=>{
//   console.log("User was disconnected");
// });
server.listen(port,() => {
  console.log('server started');
});
