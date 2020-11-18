import cors from 'cors';

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

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

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});
