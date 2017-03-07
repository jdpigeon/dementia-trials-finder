var geocoder = new google.maps.Geocoder;

// adds every marker in markerlist to map.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function deleteMarkers() {
  //setMapOnAll(null);
  markers = [];
}


// Accepts an AdressComponents Array and finds the correct city name
function parseCity(addressComponent) {
  return addressComponent[1].long_name;
}


function createSearchBar() {

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);


  // Bias the SearchBox results towards current map's viewport.
  state.map.addListener('bounds_changed', function() {
    searchBox.setBounds(state.map.getBounds());
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
      console.log(parseCity(place.address_components));
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
      console.log('ran places loop');
      setLocation(parseCity(place.address_components), bounds);
    });

    sendUserCity();
  });
}


$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(setCoordinates);
  google.maps.event.addDomListener(window, 'load', initialize);

  function initialize() {

    var mapOptions = {
      center: state.latLng,
      scrollWheel: false,
      zoom: 13
    };

    createMap(new google.maps.Map(document.getElementById("map-canvas"), mapOptions));
    createSearchBar();
    placeVisibleMarkers();

    state.map.addListener(['center_changed'], function() {
      sendUserCity();
    });

  };


});