var map = L.map("mapid", {
    center: [0, 0],
    zoom: 0
});

L.GridLayer.DebugCoords = L.GridLayer.extend({
    createTile: function (coords, done) {
        var tile = document.createElement("div");
        tile.innerHTML = [coords.x, coords.y, coords.z].join(",");
        tile.style.outline = "1px solid red";

        setTimeout(function () {
            done(null, tile);
        }, 500 + Math.random() * 1500);
        return tile;
    }
});

L.gridLayer.debugCoords = function (opts) {
    return new L.GridLayer.DebugCoords(opts);
};

map.addLayer(L.gridLayer.debugCoords());