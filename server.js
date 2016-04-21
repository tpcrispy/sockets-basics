var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket){
	console.log('user connect via socket.io!');

	socket.on('message', function (message){
		console.log('Message received!' + message.text);

		message.timestamp = moment().valueOf();		
		io.emit('message', message);
	});

	//timestamp property --JavaScript timestap

	socket.emit('message', {
		text: 'Welcome to the chat Application',
		timestamp: moment().valueOf()
	});
	
});

http.listen(PORT, function () {
	console.log('Server Started');
});