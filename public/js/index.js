var socket = io();

socket.on('connect',function(){
  console.log("connected to server");
//to send the data
  // socket.emit('createEmail',{
  //   to:"test@example.com",
  //   text:"checkinh client server connection"
  // });

//   socket.emit('createMessage',{
//     from:"Praveen",
//     text:"checking client server connection"
//   });
});
jQuery('#message-form').on('submit', function(e){
  e.preventDefault();
  socket.emit('createMessage',{
    from: 'User',
    text: jQuery('[name=message]').val()
  },function(){

  });
});
//
socket.on('disconnect',function(){
  console.log("Disconnected from server");
});

socket.on('newMessage',function(message){
  // console.log('New Messsage',message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}:${message.text}`);
  jQuery('#messages').append(li);

});
// socket.on('newEmail',function(email){
//   console.log('New Email',email);
// });
