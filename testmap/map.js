var map = L.map("map", {
    center: [35, 110],
    zoom: 4
});

var tooltio;
var lay;

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    atribution: "© <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
}).addTo(map);

function getColor(c) {
    return c > 80 ? "#3194D0" :
        c > 70 ? "#fbd0e5" :
            c > 60 ? "#c4bcda" :
                c > 50 ? "#E31A1C" :
                    c > 40 ? "#FC4E2A" :
                        c > 30 ? "#f7d2b6" :
                            c > 20 ? "#FEB24C" :
                                c > 10 ? "#c2e4b7" :
                                    "#FFEDA0";
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.id),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7
    };
}

function markerFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 3,
        color: "#333",
        dashArray: "",
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    var id = e.target.feature.properties.id;
    var idd = id.toString();
    tooltip = L.marker([e.target.feature.properties.cp[1], e.target.feature.properties.cp[0]]).addTo(map).bindPopup(idd).openPopup();
}

function resetmarker(e) {
    tooltip.remove();
    geojson.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: markerFeature,
        mouseout: resetmarker
    });
}

geojson = L.geoJson(chinaPro, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);
geojson.eachLayer(function (layer) {
    layer.bindPopup("childNum:"+layer.feature.properties.childNum+"<br>id:"+layer.feature.properties.id+"<br>name:"+layer.feature.properties.name+"<br>cp:["+layer.feature.properties.cp[0]+","+layer.feature.properties.cp[1]+"]");
});

var bounds = [[-52, 40], [75, 270]];
var image = L.imageOverlay("640.png", bounds).addTo(map);
