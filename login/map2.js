var mymap = L.map("mapid").setView([51.505, -0.09], 13);
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    atribution: "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='http://mapbox.com'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "pk.eyJ1Ijoid2ViZ2lzcm9va2llIiwiYSI6ImNqM3V4YTVlZjAwMDEycXMwbWJrbWNwejIifQ.ztI66tKDRE1ZyjMQ8WqIBw"
}).addTo(mymap);

var LeafIcon = L.Icon.extend({
    options:{
        shadowUrl:"leaf-shadow.png",
        iconSize:[38,95],
        shadowSize:[50,64],
        iconAnchor:[22,94],
        shadowAnchor:[4,62],
        popupAnchor:[-3,-76]
    }
});

var greenIcon = new LeafIcon({iconUrl:"leaf-green.png"});
    redIcon = new LeafIcon({iconUrl:"leaf-red.png"}),
    orangeIcon = new LeafIcon({iconUrl:"leaf-orange.png"});

L.icon = function(options){
    return new LeafIcon.Icon(options);
}

L.marker([51.5,-0.09],{icon:greenIcon}).addTo(mymap).bindPopup("I am a green leaf .");
L.marker([51.495, -0.083], {icon: redIcon}).addTo(mymap).bindPopup("I am a red leaf.");
L.marker([51.49,-0.1],{icon:orangeIcon}).addTo(mymap).bindPopup("I am a orange leaf .");