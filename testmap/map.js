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
    return c > 80 ? "#800026" :
        c > 70 ? "#BD0026" :
            c > 60 ? "#333" :
                c > 50 ? "#E31A1C" :
                    c > 40 ? "#FC4E2A" :
                        c > 30 ? "#FD8D3C" :
                            c > 20 ? "#FEB24C" :
                                c > 10 ? "#FED976" :
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

L.geoJson(chinaPro, { style: style }).addTo(map);

function markerFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
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

function popupInfo(e) {
    lay = [e.target.feature.properties.cp[1], e.target.feature.properties.cp[0]];
    var geo = e.target.feature.properties;
    L.popup().setLatLng(lay).setContent('<p>id:'+geo.id+'<br>name:'+geo.name+'<br>childNum:'+geo.childNum+'<br>cp:['+geo.cp[1]+','+geo.cp[0]+']</p>').openOn(map);
};

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: markerFeature,
        mouseout: resetmarker,
        click: popupInfo
    });
}

geojson = L.geoJson(chinaPro, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

var bounds = [[-52, 40],[75,270]];
var image = L.imageOverlay("640.png",bounds).addTo(map);