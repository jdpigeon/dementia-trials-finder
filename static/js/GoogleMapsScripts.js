
var lat;
var lng;
var map;
var markers = [];

function locationHandler(position)
{
  lat = position.coords.latitude;
  lng = position.coords.longitude;
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function deleteMarkers() {
  setMapOnAll(null);
  markers = [];
}

function addMarker(results) {
  var marker = new google.maps.Marker( {
    map: map,
    place: {
      placeId: results[0].place_id,
      location: results[0].geometry.location
    }
  });
  markers.push(marker);
}

function showMarkers() {
  for (var i = 0; i < markers.length; i++) {
    //var marker = new google.maps.Marker(markers[i]);
  }
}


function createSearch() {

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);


  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(locationHandler);
  google.maps.event.addDomListener(window, 'load', initialize);

  function initialize() {

    /* position Amsterdam */
    if (lat == null) {
      lat = 43.6596728;
      lng = -79.3891647;
    }
    var latlng = new google.maps.LatLng(lat, lng);

    var mapOptions = {
      center: latlng,
      scrollWheel: false,
      zoom: 13
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    createSearch();

  };
});