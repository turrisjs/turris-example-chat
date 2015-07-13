var _ = require('lodash');

module.exports = function(server) {
    console.log('staring server...');
    var io = require('socket.io')(server);

    var clients = [];

    io.on('connection', function(socket){
        // tell new user joined
        clients.map(function(client) {
            client.emit('user joined', socket.id);
        });
        // store
        clients.push(socket);
        // tell his name
        socket.emit('name', socket.id);
        // listen for chat msgs
        socket.on('chat message', function(msg) {
            console.log('got msg:', msg);
            clients.map(function(client) {
                client.emit('chat message', {text: msg, user: socket.id});
            });
        });
        socket.on('disconnect', function() {
            _.remove(clients, {id: socket.id});
            // tell others he left
            clients.map(function(client) {
                client.emit('user left', socket.id);
            });
        });
    });
};
