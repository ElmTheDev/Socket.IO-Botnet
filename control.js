const socket = require('socket.io-client')('http://localhost:7035');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

socket.on('data', function(data, respond, input)
{
	if(input)
	{
		readline.question(`${data}\n>> `, (dataToSend) => {
			socket.emit(respond, dataToSend);
			readline.pause();
		});
	} else {
		readline.question(`${data}\n>> `, (dataToSend) => {
			socket.emit('userResponse', dataToSend);
			readline.pause();
		});
	}
});
