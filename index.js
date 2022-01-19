const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 7071 });

var liste = [];

var sockets = [];

function yayinla(veri){
	for(let i =0; i<sockets.length; i++)
	{
		 sockets[i].send(veri);
	}
}

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
	if(data=="getir"){
		console.log("getir isteği");
		//ws.send(JSON.stringify(liste));
	}else{
		console.log('received:', data);
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

