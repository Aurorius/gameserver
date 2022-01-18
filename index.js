const cors = require('cors');

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const io = socketIO(PORT)(httpServer, {
  cors: {
    origin: "http://aurorius.epizy.com/",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  socket.send('Hoşgeldiniz sayın ' + socket.id);
  //socket.emit('message', 'Hoşgeldiniz sayın ' + socket.id);
});
