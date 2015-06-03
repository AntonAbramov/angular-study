var myCenter=new google.maps.LatLng(50.446805, 30.510911);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:17,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter
  });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"Service Apple <br> Ремонт любой сложности техники Apple <br>(096) 1253246<br>(093) 7229156<br>(066) 5669752"
  });

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);