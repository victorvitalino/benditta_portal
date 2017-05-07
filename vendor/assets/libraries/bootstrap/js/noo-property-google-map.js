var nooGoogleMap = {"latitude":"40.714398","longitude":"-74.005279"};
var map;
var infowindow;
var marker;

jQuery('#noo_property_google_map_search_input').bind('keypress keydown keyup', function(e){
    if(e.keyCode == 13) { e.preventDefault(); }
});


if ($("#noo_property_google_map").length > 0){
  function map_picker_initialize() {

    var markers = [];
    var myPlace    = new google.maps.LatLng(nooGoogleMap.latitude,nooGoogleMap.longitude);
    map = new google.maps.Map(document.getElementById('noo_property_google_map'), {
      flat:false,
      noClear:false,
      zoom: 16,
      scrollwheel: true,
      draggable: true,
      center: myPlace,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Create the search box and link it to the UI element.
    var input = /** @type {HTMLInputElement} */(
        document.getElementById('noo_property_google_map_search_input'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var searchBox = new google.maps.places.SearchBox(
      /** @type {HTMLInputElement} */(input));

    google.maps.event.addListener(searchBox, 'places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }
      for (var i = 0, marker; marker = markers[i]; i++) {
        marker.setMap(null);
      }

      var bounds = new google.maps.LatLngBounds();
      for (var i = 0, place; place = places[i]; i++) {
        // Create a marker for each place.
        var _marker = new google.maps.Marker({
          map: map,
          zoom:16,
          title: place.name,
          position: place.geometry.location
        });
        bounds.extend(place.geometry.location);
      }

      map.fitBounds(bounds);
    });
    // [END region_getplaces]

    // Bias the SearchBox results towards places that are within the bounds of the
    // current map's viewport.
    google.maps.event.addListener(map, 'bounds_changed', function() {
      var bounds = map.getBounds();
      searchBox.setBounds(bounds);
    });

    var property_location = myPlace;
    marker = new google.maps.Marker({
  	    position: property_location,
  	    map: map
    });
    //
  	infowindow = new google.maps.InfoWindow({
  		content: '<div style="width:250px">Latitude: ' + property_location.lat() + '<br>Longitude: ' + property_location.lng() + '</div>',
  		maxWidth: 300
  	});
  	infowindow.open(map,marker);
  	google.maps.event.addListener(map, 'click', function(event) {
  		placeMarker(event.latLng);
  	});
  }

  google.maps.event.addDomListener(window, 'load', map_picker_initialize);
}

function placeMarker(location){
	infowindow.close();
	marker.setPosition(location);
	infowindow.setContent('<div style="width:250px">Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()+'</div>');
	infowindow.open(map,marker);
	document.getElementById("_noo_property_gmap_latitude").value=location.lat();
	document.getElementById("_noo_property_gmap_longitude").value=location.lng();
}
