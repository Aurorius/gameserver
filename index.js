const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
var express = require('express');

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
  
 
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

var sockets = [];

var liste = [""];

function yayinla(veri){
	for(let i =0; i<sockets.length; i++)
	{
		 sockets[i].send(veri);
	}
}

function find(veri){
	for(let i = 0; i<liste.length;i++){
		if(liste[i][0]==veri){
			return i
		}
	}
	return false
};

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
	if(data=="getir"){
		console.log("getir isteği");
		//ws.send(JSON.stringify(liste));
	}else{
		var parsedData = JSON.parse(data);
		if(parsedData[0]=="sil"){
			if(parsedData[1]=="furki"){
				
			}
		}else{
			//console.log('received ip :'+ ws._socket.remoteAddress, data);
			console.log('received:', parsedData);
			console.log(find(parsedData[0]))
			var bul = find(parsedData[0]);
			if(bul == false){
				liste.push(parsedData);

			}else if(bul>=0){
				console.log("ohno");
				liste.splice(bul, 1);
				liste.push(parsedData);
			}
			console.log(liste.length + " " + bul);
			yayinla(JSON.stringify(liste));
		}
		
	}
    
  });
  
 ws.on('close', function close() {
  liste = [""];
});
sockets.push(ws);
console.log('received');
//ws.send(JSON.stringify(liste));
//ws.send('something');
});
