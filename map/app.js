

/**
 * Adds markers to the map highlighting the locations of the captials of
 * France, Italy, Germany, Spain and the United Kingdom.
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map) {
  var pikeMarker = new H.map.Marker({lat:47.609052, lng:-122.339909});
  //102 Pike st Seattle WA 98101
  map.addObject(pikeMarker);

  var airportMarker = new H.map.Marker({lat:47.441339, lng: -122.303731});
  // 17801 International Blvd SeaTac, WA 98158
  map.addObject(airportMarker);

  var seattleCenterMarker = new H.map.Marker({lat:47.620903, lng:-122.350456});
  //305 Harrison St Seattle WA 98109
  map.addObject(seattleCenterMarker);

  var capitolHillMarker = new H.map.Marker({lat:47.623788, lng: -122.320629});
  //532 Broadway E, Seattle, WA 98102
  map.addObject(capitolHillMarker);

  var alkiMarker = new H.map.Marker({lat:47.578842, lng:-122.411202});
  //2742 Alki Ave SW Seattle WA 98116
  map.addObject(alkiMarker);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
var platform = new H.service.Platform({
  app_id: 'zXM3icuAI8hpSSlAR96d',
  app_code: 'sLw6qQLlCGF5bS3LQpS9JA',
  useCIT: true,
  useHTTPS: true
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.normal.map,{
  center: {lat:47.605, lng:-122.33},
  zoom: 12,
});

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
addMarkersToMap(map);
