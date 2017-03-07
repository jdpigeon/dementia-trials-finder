var xhr = new XMLHttpRequest();

function sendUserCity() {
  $.post("/postmethod", {
    javascript_data: JSON.stringify(state.location)
  });
}

function receiveTrials() {
  $.get("/getmethod", state.location,
  function (trials) {
    console.log(trials);
    addTrials(JSON.parse(trials));
  })
}

// Old Version
/*
 function sendUserCity () {
 geocoder.geocode({'location': map.getCenter()}, function(results, status) {
 if (status === 'OK') {
 if (results[1]) {

 var city = results[1].address_components[2].long_name;
 console.log(city);

 $.post( "/postmethod", {
 javascript_data: JSON.stringify(city)
 });
 }
 }
 });
 }
 */