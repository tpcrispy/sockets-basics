var socket = io();

socket.on('connect', function (){
	console.log('Conncted to a socket.io server!');
});

socket.on('message', function (message){
	console.log('New Message');
	console.log(message.text);
});
