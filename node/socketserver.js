var io = require('socket.io').listen(8000);
io.sockets.on('connection', function (socket){

  require('http').request({
    host: '127.0.0.1',
    port: '8080',
    path: '/node/taxis.json',
    method: 'GET'
}, function(res) {
    res.setEncoding('utf8');
    var body = '';
    res.on('data', function(chunk) {
        body += chunk;
    });
    res.on('end', function() {
        data = JSON.parse(body);

         var res = [];
         var i = 0;
         for(i=1; i< data.length;i++){
           var taxi = data[i];

           if(typeof taxi.geometry=="undefined"){
             console.log(i);
             console.log(taxi);

           }
           else{

             var el = {
              id: taxi.fields.station_id,
              lon: taxi.geometry.coordinates[0],
              lat: taxi.geometry.coordinates[1]

             };
             res.push(el);
           }
         }

        socket.emit('news', res);

})

}).end();


});
