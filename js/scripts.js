mapboxgl.accessToken = 'pk.eyJ1IjoiYXJlbi1rYWIiLCJhIjoiY2tsMTJhejk3MHhxazJxcW5sbGo0d3R3bSJ9.iuLNkGjRTZohqeqRzq-r7g';

  var map = new mapboxgl.Map({
  container: 'map_container', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-73.90, 40.73], // starting position [lng, lat]
  zoom: 10.3 // starting zoom
  });

  var nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'top-left');

    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: true, // Do  use the default marker style
    });

  // Add the geocoder to the map
  map.addControl(geocoder);

  // let's add the tennis courts to the map!!!

  $.getJSON('./data/tennis_courts.json', function(courts) {
    console.log(courts)

    courts.forEach(function(court) {
      console.log(court.Name, court.Prop_ID)

    if (court.Info !== null){

        var html = `
          <div>
            <h3>${court.Name}</h3>
            <div><strong>Location:</strong> ${court.Location}</div>
            <div><strong>Type:</strong> ${court.Tennis_Type}</div>
            <div><strong>Courts:</strong> ${court.Courts}</div>
            <div><i>"${court.Info}"</i></div>
          </div>
      `
      }

      else {

        var html = `
          <div>
            <h3>${court.Name}</h3>
            <div><strong>Location:</strong> ${court.Location}</div>
            <div><strong>Type:</strong> ${court.Tennis_Type}</div>
            <div><strong>Courts:</strong> ${court.Courts}</div>
          </div>
        `
      }

  if (court.Courts < 7) {
      var el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage ='url("images/tennis_marker.svg")';
      el.style.width = '32px';
      el.style.height = '44px';

    new mapboxgl.Marker(el,{
       anchor: "bottom"
      })
    .setPopup(new mapboxgl.Popup({anchor: 'bottom', offset:[0,-42] }).setHTML(html)) // add popup
    .setLngLat([court.lon, court.lat])
    .addTo(map);
  }
  else{
      var el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage ='url("images/tennis_marker_yellow.svg")';
      el.style.width = '32px';
      el.style.height = '44px';

    new mapboxgl.Marker(el,{
       anchor: "bottom"
      })
    .setPopup(new mapboxgl.Popup({anchor: 'bottom', offset:[0,-42] }).setHTML(html)) // add popup
    .setLngLat([court.lon, court.lat])
    .addTo(map);
    }
  })
})
