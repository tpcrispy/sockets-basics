var socket = io();

socket.on('connect', function (){
	console.log('Conncted to a socket.io server!');
});