const cors = require('cors');

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';


const server = express()
.use(function(req, res, next) {
  cors();
})

var io = socketIO(server, options={
 cors:true,
 origins:["/"],
});

io.on('connection', (socket) => {

  socket.send('Hoş geldiniz sayın ' + socket.id);
  //socket.emit('message', 'Hoşgeldiniz sayın ' + socket.id);

});
