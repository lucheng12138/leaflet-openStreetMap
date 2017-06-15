var littleton = L.marker([39.61, -105.02]).bindPopup("this is Littleton,CO.");
denver = L.marker([39.74, -104.99]).bindPopup("This is Denver,CO");
aurora = L.marker([39.73, -104.8]).bindPopup("This is Aurora,CO");
golden = L.marker([39.77, -105.23]).bindPopup("This is Golden,CO");

var mapboxAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';



var cities = L.layerGroup([littleton, denver, aurora, golden]);

var grayscale = L.tileLayer(mapboxUrl, { id: "mapbox.light", attribution: mapboxAttribution }),
    streets = L.tileLayer(mapboxUrl, { id: "mapbox.streets", attribution: mapboxAttribution }),
    outdoors = L.tileLayer(mapboxUrl, { id: "mapbox.outdoors", attribution: mapboxAttribution });
dark = L.tileLayer(mapboxUrl, { id: "mapbox.dark", attribution: mapboxAttribution });

var mymap = L.map("mapid", {
    center: [39.73, -104.99],
    zoom: 10,
    layers: [grayscale, cities]
});

L.polyline([[39.61, -105.02], [39.77, -105.23]]).addTo(mymap);
L.polyline([[39.74, -104.99], [39.77, -105.23]]).addTo(mymap);
L.polyline([[39.74, -104.99], [39.61, -105.02]]).addTo(mymap);

var baseMaps = {
    "Grayscale": grayscale,
    "Streets": streets,
    "Outdoors": outdoors,
    "Dark": dark
};

var overlayMaps = {
    "Cities": cities
}

L.control.layers(baseMaps, overlayMaps).addTo(mymap);

var baseMaps = {
    "<span style= 'color:gray'>Grayscale</span>": streets,
    "Streets": streets,
    "<span style= 'color:gray'>Grayscale</span>": outdoors,
    "Outdoors": outdoors,
    "<span style= 'color:gray'>Grayscale</span>": dark,
    "Outdoors": dark
}