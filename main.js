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




  //return true;
}

google.maps.event.addDomListener(window, 'load', initialize);
