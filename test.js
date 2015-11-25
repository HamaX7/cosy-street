var map = L.map('map', {
    center: [49, 6],
    zoom: 13
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY29zeXN0cmVldCIsImEiOiJjaWhkaHRzN3UwYm9pdmJrbHZuaWIwOThrIn0.AjYuz32cxPVxwTlKpXG_Ww', {
maxZoom: 18,
minZoom: 10,
id: 'mapbox.streets'
}).addTo(map);

map.locate({setView: true, maxZoom: 18});

map.on('locationfound', onLocationFound);

function onLocationFound(e) {
	L.marker(e.latlng).addTo(map);
}
