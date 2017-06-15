var mymap = L.map("mapid").setView([51.505, -0.09], 13);
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    atribution: "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='http://mapbox.com'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "pk.eyJ1Ijoid2ViZ2lzcm9va2llIiwiYSI6ImNqM3V4YTVlZjAwMDEycXMwbWJrbWNwejIifQ.ztI66tKDRE1ZyjMQ8WqIBw"
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
var circle = L.circle([51.508, -0.11], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle");
polygon.bindPopup("I am a circle");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

function onMapClick(e){
    alert("You clicked the map at" + e.latlng);
}

mymap.on("click",onMapClick);

var popup = L.popup();

function onMapClick(e){
    popup.setLatLng(e.latlng).setContent("You clicked the map at" + e.latlng.toString()).openOn(mymap);
}

mymap.on("click",onMapClick);

