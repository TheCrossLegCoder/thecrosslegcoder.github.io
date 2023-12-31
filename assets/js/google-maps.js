function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 26.642955, lng: 87.991978};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 13,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Nepal' // Title Location
    });
}