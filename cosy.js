var map = L.map( 'map', {
    center: [48.8534100, 2.3488000],
    zoom: 15
});

// Ajouter un layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: '<a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'cosystreet.o8f5hg5e',
    accessToken: 'pk.eyJ1IjoiY29zeXN0cmVldCIsImEiOiJjaWhkaHRzN3UwYm9pdmJrbHZuaWIwOThrIn0.AjYuz32cxPVxwTlKpXG_Ww'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});
map.on('locationfound', onLocationFound);

function onLocationFound(e) {
    L.marker(e.latlng).addTo(map);
}
