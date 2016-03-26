var map;
var markers = [];
var ids = {};

function initialize() {
  var mapProp = {
 center:new google.maps.LatLng(48.8534100, 2.3488000),
 zoom: 12,
 mapTypeId: google.maps.MapTypeId.ROADMAP
};
  map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var socket = io.connect('http://127.0.0.1:8000');
  socket.on('news', function (data) {
    markers = [];
    console.log(data.length);
  for (i = 0; i < data.length; i++)
  {
    markers[parseInt(data[i].id)] = new google.maps.Marker({
      position: new google.maps.LatLng(data[i].lat, data[i].lon),
      icon: 'car.png'
    });
    markers[parseInt(data[i].id)].addListener('click', listeners(parseInt(data[i].id)));
    markers[parseInt(data[i].id)].setMap(map);

  }
});

}

google.maps.event.addDomListener(window, 'load', initialize);

function listeners(index)
{
  return function()
  {
    map.setCenter(markers[index].getPosition());
    map.setZoom(16);
    $('#navbar p').empty();
    $('#navbar p').text('Taxi '+index+' successfully ordered');
    taxi_move(index, function() {
      $('#navbar').fadeOut(1000);
      $('#navbar p').html('<strong>Taxi '+index+' has arrived.</strong>');
      $('#navbar').fadeIn(1000);
     });
  };
}

function taxi_move(i, end_eval)
{
  var position = markers[i].getPosition();
  var count = 0;
  var interval = window.setInterval(function() {
  var new_position = new google.maps.LatLng(position.lat()+0.00001*count,position.lng()+0.00001*count);
  if (count == 0)
  {
     map.setCenter(new_position);
     map.setZoom(15);
  }
    markers[i].setPosition(new_position);
    count++;
    if (count > 100)
    {
      window.clearInterval(interval);
        console.log('taxi '+i+' has been moved');
      end_eval();

    }
  }, 50);

}
