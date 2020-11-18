const express = require('express'), 
      router = express.Router();

const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';



router.get('/', function(req, res, next) {
    res.render('index.html');
});

app.use('/', router);


 // .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
const server = express()

  .listen(PORT, () => console.log(`Listening on ${PORT}`));




const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  
  socket.on('sunucuyuSelamla', () => socket.emit("clienteYolla", "slm") );
  
  
});

////setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
