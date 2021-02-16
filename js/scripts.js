mapboxgl.accessToken = 'pk.eyJ1IjoiYXJlbi1rYWIiLCJhIjoiY2tsMTJhejk3MHhxazJxcW5sbGo0d3R3bSJ9.iuLNkGjRTZohqeqRzq-r7g';

  var map = new mapboxgl.Map({
  container: 'map_container', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-73.99, 40.70], // starting position [lng, lat]
  zoom: 11 // starting zoom
  });

  // let's add the tennis courts to the map!!!

  $.getJSON('./data/tennis_courts.json', function(courts) {
    console.log(courts)

    pizzaRows.forEach(function(court) {
      console.log(court.Name, court.Prop_ID)

      var html = `
        <div>
          <h3>${court.Name}</h3>
          <div>Location: ${court.Location}</div>
          <div>Type: ${court.Tennis_Type}</div>
          <div><i>"${court.Info}"</i></div>
        </div>
      `

      // all non MUP and CUSP will be this color
      var color = 'green'

      if (court.Courts > 4 && court.Courts < 8) {
        color = 'yellow'
      }

      if (court.Courts > 8) {
        color = 'orange'
      }

      new mapboxgl.Marker({
        color: color
      })
        .setLngLat([court.lon, court.lat])
        .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
        .addTo(map);
    })
  })
