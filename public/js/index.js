var socket = io();

socket.on('connect',function(){
  console.log("connected to server");
//to send the data
  // socket.emit('createEmail',{
  //   to:"test@example.com",
  //   text:"checkinh client server connection"
  // });

  socket.emit('createMessage',{
    from:"Praveen",
    text:"checking client server connection"
  });
});

//
socket.on('disconnect',function(){
  console.log("Disconnected from server");
});
socket.on('newMessage',function(message){
  console.log('New Messsage',message);
});
// socket.on('newEmail',function(email){
//   console.log('New Email',email);
// });
