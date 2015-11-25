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

    // On lance la recherche avec nominatim pour recuperer toutes les infos sous format JSON
    // On limite le resultat a 5 items (5 couples lng, lat)
    var nominatimUrl = "http://nominatim.openstreetmap.org/search?format=json&limit=5&q=" + adr;
    var getHttp = function()
    {
        this.get = function(url, callback)
        {
            var httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = function()
            {
                if (httpRequest.readyState == 4 && httpRequest.status == 200)
                    callback(httpRequest.responseText);
            }
            httpRequest.open("GET", url, true);
            httpRequest.send();
        }
    }

    var nominatimRequest = new getHttp();
    nominatimRequest.get(nominatimUrl, function(response)
    {
        // Parsing du JSON
        var locationInfo = JSON.parse(response);

        // Zoom sur localisation et placement du marqueur
        var latLon = new L.LatLng(locationInfo[0].lat, locationInfo[0].lon);
        map.setView(latLon, 17);

        var markerUser = L.marker(latLon);
        markerUser.addTo(map);

    });
}
