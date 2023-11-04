const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('public'));

var roomno = 1;

io.on('connection', function(socket){
   socket.join("room-"+roomno);
   //Send this event to everyone in the room.
   io.to("room-"+roomno).emit('connectToRoom', "You are in room no. " + "room-"+roomno);
});

let players = []; 
var player1, player2;

var playercount = 0;
console.log('There are ' + playercount + ' players currently logged in');

   io.on('connection', (socket) => {
   if (!player1){
   	player1 = socket;
  console.log("Player 1 = " + player1.id);
  console.log("Player 1 = FALSE");
  
  }) ;
  
   /*console.log('Player ' + socket.id + ' has connected');
   players.push(socket);
   socket.join("room-" + roomno);
   playercount++;
				
   socket.emit('welcome', 'Welcome to room ' + roomno +' player ' +  playercount);
   //socket.emit('turn', 'Waiting for player 2');
   player1.emit('welcome', 'at laaaaaast');





   
   if (players[0]) {
		console.log("player1");
		players[0].emit('setplayercolour', "yellow");
		player1 = players[0];
		console.log(player1.id);
		if (!players[1]) {console.log("Player2 slot is empty");
players[1] = socket;		
		}
}	
	if (players[1]) {
		console.log("player2");
		players[1].emit('setplayercolour', "red");
		//player2 = players[1];
		//console.log(player2.id);
}	

   io.emit('turn', "Thare are two players connected so Let's play");


io.in('room-1').allSockets().then(result=>{ //Check how many are in a room
    console.log(result.size) });


   socket.on('disconnect', () => {
   playercount--;
   if (socket.id == player1.id) {
   	player1 = false;
   console.log("Player 1 has disconnected");
   }
   //console.log('Player '+ socket.id + ' has disconnected');
   console.log('There are ' + playercount + ' currently logged in');
  });
console.log('There are ' + playercount + ' players currently logged in');
});



io.on('connection', (socket) => {
  socket.on('player move', (msg) => {
  //io.emit('turn', msg);
  console.log('message: ' + msg);
  });
});


io.on('connection', (socket) => {
  socket.on('move', (msg) => {
  io.emit('make move', msg);
  console.log('player move ' + msg);
  });
});

var moves = 0;
var lastmove = true;
var currentplayer = players[0];   //player 1 first move;

io.on('connection', (socket) => {
  socket.on('server move', (data,mycolor) => {
  			io.emit('makemove', data,mycolor); 	
  });
});

*/

server.listen(3000, () => {
  console.log('listening on port :3000');
});

