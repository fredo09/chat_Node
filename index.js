
/*Exportamos express*/

var express = require('express')();

var http= require('http').Server(express);
//var app= express();

var io =require('socket.io')(http);

var port = process.env.PORT || 3000;

express.get('/', function(req, res){
	res.sendFile(__dirname +'/index.html');
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		io.emit('chat message', msg );
	});
});


/* Enviando a un solo usuario
io.on('connection', function(socket){
	socket.broadcast.emit('hi');
});
*/

http.listen(port, function(){
	console.log('se a escuchado en el puerto 3000');
});