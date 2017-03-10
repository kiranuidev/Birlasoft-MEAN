var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var userCount = 0;
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    userCount++;
    io.emit("updateCount", userCount);
    socket.on('disconnect', function() {
        console.log('user disconnected');
        userCount--;
        io.emit("updateCount", userCount);
    });
    socket.on("LetsChat", function(message) {

        console.log('User message:' + message);

        io.emit('LetsChat', message);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});