/**
 * Created by dano on 04/03/17.
 */


var listItem = '<div class="study-item">' +
  '<header class="study-header">' +
  '<a class="url name" href=""></a>' +
  '</header>' +
  '<div class="study-meta">' +
  '<span class="location" href=""></span>' +
  '<span class="centre"></span>' +
  '<span class="eligibility"></span>' +
  '<span class="recruitment"></span>' +
  '</div>' +
  '<div class="study-footer">' +
  '<p class="purpose"></p>' +
  '</div>' +
  '<hr>' +
  '</div>';


var options = {
  valueNames: [ 'name', 'location', 'purpose', 'centre', 'study_type', {name: 'url', attr: 'href'}, 'recruitment' ],

  item: listItem
};

var trialsList = new List('study-list', options, state.trials);

// TODO: Cache trial Maps API Places info in DB to avoid hitting request limit
function placeVisibleMarkers () {
  //deleteMarkers();

  // Loops through every visible trial in list, placing a google Places request for the Centre at which each study is held and posting markers at each place
  trialsList.matchingItems.forEach(function (item) {

    // Places request
    var request = {
      location: state.map.getCenter(),
      radius: '500',
      query: item.values().centre
    };

    // Checks that the PlacesServiceStatus is OK, and adds a marker
    // using the place ID and location from the PlacesService.
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        addMarker(results, item.values().name);
      }
    }

    var service = new google.maps.places.PlacesService(state.map);
    service.textSearch(request, callback);
  });

}

trialsList.on('updated', function () {
  placeVisibleMarkers();
});




