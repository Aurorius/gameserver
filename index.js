const express = require('express');

const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';




 // .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
const server = express()
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
})
  .listen(PORT, () => console.log(`Listening on ${PORT}`));




const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  
  socket.on('sunucuyuSelamla', () => socket.emit("clienteYolla", "slm") );
  
  
});

////setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
