// Geolocalisation optionnelle

//L.Control.geocoder().addTo(map);
/*new L.Control.GeoSearch({
    provider: new L.GeoSearch.Provider.OpenStreetMap()
}).addTo(map);*/

function locateUser()
{
    map.locate({setView: true, maxZoom: 17});
    map.on('locationfound', onLocationFound);

    function onLocationFound(e) {
        L.marker(e.latlng).addTo(map);
    }
}

function locateAddress()
{
    var adr = document.getElementById('get-address').value;
    var geocoder = new L.Control.Geocoder.Google();
    geocoder.geocode(adr, function(results) {
           var latlng= new L.LatLng(results[0].center.lat, results[0].center.lng);
           map.setView(latlng, 17);
           L.marker(latlng).addTo(map);
    });

    console.log(adr);
}
