var io = require('socket.io').listen(8000);

io.sockets.on('connection', function (socket) {
  socket.emit('start_taxis', { hello: 'world' });
  socket.emit('refresh_taxis', {hello: 'world'});

/*  socket.on('my other event', function (data) {
    socket.emit('news', {connard: 'pd'});
    console.log('je passe ici');
  });*/
});
