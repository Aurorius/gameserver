const express = require('express');

const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';




 // 
const app = express();


//app.get('/selam', function (req, res) {
// res.sendFile(INDEX, { root: __dirname })
//});

app..use((req, res) => res.sendFile(INDEX, { root: __dirname }));



 app.listen(PORT, () => console.log(`Listening on ${PORT}`));




const io = socketIO(app);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  
  socket.on('sunucuyuSelamla', () => socket.emit("clienteYolla", "slm") );
  
  
});

////setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
