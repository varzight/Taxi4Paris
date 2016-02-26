
var $ = require('jquery')(require('jsdom').jsdom().parentWindow);

var io = require('socket.io').listen(8000);

io.sockets.on('connection', function (socket){

  $.getJSON( "taxis.json", function( data ) {
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

   });


});
