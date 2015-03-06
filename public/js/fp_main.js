var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var sampleRoute = [{stationName: "Lorimer St", latitude: 40.714067, longitude: -73.950275},
  {stationName: "Graham Av", latitude: 40.714588, longitude: -73.944031}, 
  {stationName: "Grand St", latitude: 40.711904, longitude: -73.940641}, 
  {stationName: "Montrose Av", latitude: 40.707732, longitude: -73.939868}, 
  {stationName: "Morgan Av", latitude: 40.706138, longitude: -73.933152}, 
  {stationName: "Jefferson St", latitude: 40.706609, longitude: -73.922959}, 
  {stationName: "DeKalb Av", latitude: 40.703828, longitude: -73.918378}, 
  {stationName: "Myrtle-Wyckoff Avs", latitude: 40.699826, longitude: -73.911608}, 
  {stationName: "Halsey St", latitude: 40.695572, longitude: -73.904120}, 
  {stationName: "Wilson Av", latitude: 40.688763, longitude: -73.904012}, 
  {stationName: "Bushwick Av - Aberdeen St", latitude: 40.682808, longitude: -73.905257}, 
  {stationName: "Broadway Jct", latitude: 40.678862, longitude: -73.903272}];
var finalList = [];
var bigArray = [];

function initialize () {
  console.log("function: initialize");
	var mapProp = {
		center : new google.maps.LatLng(40.739888, -73.990075),
		zoom : 11,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	// directionsDisplay = new google.maps.DirectionsRenderer();
	// directionsDisplay.setMap(map);
	// directionsDisplay.setPanel(document.getElementById('directions-panel'));
}


function topTen() {
 function callback(results, status) {
    console.log("function callback"); //debug
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var ii = 0; ii < results.length; ii++) {
        // console.log("results[ii]: " + JSON.stringify(results[ii])); //debug
        bigArray.push(results[ii]);
      }
      // console.log("bigArray: " + JSON.stringify(bigArray)); //debug
    }
  }

// Pseudocode

// Big array. Initialize array variable for All results.

// Loop : for each station
//   var map?
//   do the search
//   Loop : for each result
//     add the distance to the result
//     add distance/rating to the result
//   Loop - end
//   push the objects to the Big Array
// Loop - end

  for (j=0; j<sampleRoute.length; j++) {

    console.log("Outer loop j: " + j.toString()); //debug
    var dummyMap = new google.maps.Map(document.getElementById("dummyMap"),
      {
        center : new google.maps.LatLng(40.739888, -73.990075),
        zoom : 11,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      }
    );
    var service = new google.maps.places.PlacesService(dummyMap);
    var request = {
      query : document.getElementById('search_term').value,
      location : new google.maps.LatLng(sampleRoute[j].latitude, sampleRoute[j].longitude),
      radius : 500
    };
    // console.log("request: " + JSON.stringify(request));
    service.textSearch(request, callback);
  }

  console.log("bigArray: " + JSON.stringify(bigArray)); //debug

// Sort big array by quotient

// Top twenty go onto page.

}

google.maps.event.addDomListener(window, 'load', initialize);
