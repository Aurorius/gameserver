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


var io = socketIO(server, options={
 cors:true,
 origins:["/"],
});

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  
  socket.on('sunucuyuSelamla', () => 
           socket.emit("clienteYolla", "slm")
            
           );
  
});
