var map;
var markers = [];

function initialize() {
  var mapProp = {
 center:new google.maps.LatLng(48.8534100, 2.3488000),
 zoom: 12,
 mapTypeId: google.maps.MapTypeId.ROADMAP
};
  map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
markers[0]=new google.maps.Marker({
  position:new google.maps.LatLng(48.8534100, 2.3488000),
  });

markers[0].setMap(map);

markers[1] = new google.maps.Marker({
  position: new google.maps.LatLng(48.839261, 2.282138),
});
markers[1].setMap(map);

markers[2] = new google.maps.Marker({
  position: new google.maps.LatLng(48.839261, 2.422138),
});
markers[2].setMap(map);

}

function taxi_move(i)
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
    }
  }, 50);


  console.log('taxi '+i+' has been moved');
}

google.maps.event.addDomListener(window, 'load', initialize);
