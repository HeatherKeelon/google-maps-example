
    var locations = [
      ['Hoakies', 37.2285969, -80.4237087, 4],
      ['Cavaliers', 38.0335529, -78.5079772, 5],
      ['Tribe', 37.269455, -76.7082524, 3],
      ['Patriots', 38.8315175, -77.3069286, 2],
      ['Dukes', 38.435092, -78.8697548, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: new google.maps.LatLng(37.4139965, -79.2304715),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
