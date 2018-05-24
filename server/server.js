const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname,'../public');
// console.log(__dirname + '/../public' );
// console.log(publicPath);
const {generateMessage}= require('./utils/message');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);

var io = socketIO(server);
app.use(express.static(publicPath));
io.on('connection',(socket)=>{
  console.log("New User connected");

//to send data to client

  /*socket.emit('newEmail',{
    from: "pvn405.reddy@gmail.com",
    text: "Trying socket.io"
  });*/
//to listen from client
  // socket.on('createEmail',(email)=>{
  //   console.log(email);
  // });
  socket.emit('newMessage',generateMessage('Admin','welcome to chat app')
  // {
  //   from: 'Admin',
  //   text: 'Welcome to the chat app'  }
  );
  socket.broadcast.emit('newMessage',{
    from: 'Admin',
    text: 'New user joined',
    createdAt: new Date().getTime()
  })

  socket.on('createMessage',(message)=>{
    console.log(message);
    io.emit('newMessage',{
      text:message.text,
      from:message.from,
      cretaedAt: new Date().getTime()
    });

    // socket.broadcast.emit('newMessage',{
    //   from: message.from,
    //   text: message.text,
    //   cretaedAt: new Date().getime()
    // });
  });
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
