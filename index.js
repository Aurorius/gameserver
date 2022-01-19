const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
var express = require('express');

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
  
  

const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

var liste = [];

var sockets = [];

function yayinla(veri){
	for(let i =0; i<sockets.length; i++)
	{
		 sockets[i].send(veri);
	}
}

wss.on('connection', function connection(ws, req) {
  ws.on('message', function message(data) {
	if(data=="getir"){
		console.log("getir isteği");
		ws.send('received ip :'+ req.socket.remoteAddress);
	}else{
		console.log('received ip :'+ ws._socket.remoteAddress, data);
		console.log('received:', JSON.parse(data));
		liste.push(JSON.parse(data));
		console.log(liste);
		yayinla(JSON.stringify(liste));
	}
    
  });
sockets.push(ws);
console.log('received');
ws.send(JSON.stringify(liste));
//ws.send('something');
});

