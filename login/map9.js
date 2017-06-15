var map = L.map("mapid", {
    center: [40, 0],
    zoom: 1
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: "pk.eyJ1Ijoid2ViZ2lzcm9va2llIiwiYSI6ImNqM3V4YTVlZjAwMDEycXMwbWJrbWNwejIifQ.ztI66tKDRE1ZyjMQ8WqIBw"
}).addTo(map);

var trd = [63.41, 10.41];
var marker = L.marker(trd).addTo(map);
var pane = map.getPane("markerPane");
var paneCorner = L.DomUtil.create("div");
paneCorner.style.width = '12px';
paneCorner.style.height = '12px';
paneCorner.style.borderTop = "2px solid red";
paneCorner.style.borderLeft = "2px solid red";
pane.appendChild(paneCorner);

marker._icon.style.border = "1px solid blue";
var crsMarker = L.marker(map.unproject([0, 0]), {
    icon: L.divIcon({
        className: "crsMarker",
        iconAnchor: [0, 0]
    })
}).addTo(map);

var markerOffsetLine = L.polyline([[0, 0], [0, 0]]).addTo(map);
var iconOffsetLine = L.polyline([[0, 0], [63.41, 10.41]]).addTo(map);

function info() {
    var pixelOrigin = map.getPixelOrigin();
    var markerPixelCoords = map.project(trd, map.getZoom());
    var markerAnchor = marker.options.icon.options.iconAnchor;
    var markerOffset = marker._icon._leaflet_pos;

    document.getElementById("info").innerHTML =
        "<div style='color:green>CRS origin:0,0</div>'" + "<div style='color:red'>px origin:&Delta;" + pixelOrigin.x + "," + pixelOrigin.y + "</div>" +
        "<div style='color:blue'>marker px coords:" + markerPixelCoords.x.toFixed(2) + "," + markerPixelCoords.y.toFixed(2) + "</div>" +
        "<div style='color:blue'>marker anchor:&Delta;" + markerAnchor[0] + "," + markerAnchor[1] + "</div>" +
        "<div style='color:skyblue'>marker pane offset:&Delta;" + markerOffset.x + "," + markerOffset.y + "</div>";
    markerOffsetLine.setLatLngs([map.unproject(pixelOrigin), map.unproject(pixelOrigin.add(markerOffset))]);
    iconOffsetLine.setLatLngs([map.unproject(pixelOrigin.add(markerOffset)), map.unproject(pixelOrigin.add(markerOffset).subtract(markerAnchor))]);
}

map.on("load move moveend zoomend viewreset", info)
info();
