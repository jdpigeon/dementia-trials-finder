function setLocation(name, bounds = null) {
  console.log(bounds);
  state.map.fitBounds(bounds);
  state.location = name;
}

function setCoordinates(position) {
  state.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
}

function createMap(map) {
  state.map = map;
}

function addTrials(trials) {
  state.trials.push(trials);

  // add to trialsList concurrently
  trialsList.add(trials);

  // refresj trialsList
  //trialsList.clear();
  //trialsList.add(trials);
}

function addMarker(place, name) {

  function bindInfoWindow(marker, name) {
    google.maps.event.addListener(marker, 'click', function () {
      state.infowindow.setContent(name);
      state.infowindow.open(state.map, marker);
    });
  }

  var marker = new google.maps.Marker( {
    map: state.map,
    place: {
      placeId: place[0].place_id,
      location: place[0].geometry.location,
    },
  });

  bindInfoWindow(marker, name);
  state.markers.push(marker);
}

