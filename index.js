const cors = require('cors');

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

/*
const server = express()
.use(function(req, res, next) {
  cors();
})
.use('/index.html/', function (req, res, next) {
  res.sendFile(INDEX, { root: __dirname })
})
.use('/jquery/', function (req, res, next) {
  res.sendFile('jquery.js', { root: __dirname })
})
.use('/youtube-nkd/', function (req, res, next) {
  res.sendFile('youtube-nkd.js', { root: __dirname })
})
.use('/lib/', function (req, res, next) {
  res.sendFile('lib.js', { root: __dirname })
})
.use('/neko/', function (req, res, next) {
  res.sendFile('ChargeurNekodancer.swf', { root: __dirname })
})

.listen(PORT, () => console.log(`Listening on ${PORT}`));

*/

var app = express()
 
.use(cors())
 
.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

var server = app.listen(PORT);

var sockets = [];

var io = socketIO(server, options={
 cors:true,
 origins:["/"],
});

function broadcast(topic, msg)
{
  for(var i =0; i<sockets.length; i++)
  {
    sockets[i].emit(topic, msg);
  }
}

function broadcastExcept(topic, msg, except)
{
  for(var i =0; i<sockets.length; i++)
  {
    if (sockets[i] != except)
    {
      sockets[i].emit(topic, msg);
    }
  }
}


function removeSocket(socketveri)
{
 for(var i =0; i<sockets.length; i++)
  {
    if (sockets[i] === socketveri){
      sockets.splice(i, 1);
    }
  }
}

io.on('connection', (socket) => {
  console.log('Client connected');
  sockets.push(socket);
  //socket.on('disconnect', () => removeSocket(socket) );
  
  socket.on('sunucuyuSelamla', (data) => 
        broadcast("sarkiDegistir", data)
          // socket.emit("clienteYolla", "slm")
  );
  
});
