mapboxgl.accessToken = 'pk.eyJ1IjoiYXJlbi1rYWIiLCJhIjoiY2tsMTJhejk3MHhxazJxcW5sbGo0d3R3bSJ9.iuLNkGjRTZohqeqRzq-r7g';

  var map = new mapboxgl.Map({
  container: 'map_container', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-73.99, 40.70], // starting position [lng, lat]
  zoom: 11 // starting zoom
  });
