// Geolocalisation optionnelle

function locateUser()
{
    map.locate({setView: true, maxZoom: 16});
    map.on('locationfound', onLocationFound);

    function onLocationFound(e) {
        L.marker(e.latlng).addTo(map);
    }
}

function locateAdress()
{
    var adr = document.getElementById('get-adress').value;
    console.log(adr);
}
