var map = L.map("mapid",{
    center:[0,0],
    zoom:0
});

L.GridLayer.CanvasCircles = L.GridLayer.extend({
    createTile:function(coords){
        var tile = document.createElement('canvas');
        var tileSize = this.getTileSize();
        tile.setAttribute('width',tileSize.x);
        tile.setAttribute('heigh',tileSize.y);

        var ctx = tile.getContext('2d');

        ctx.beginPath();
        ctx.arc(tileSize.x/2,tileSize.x/2,4+coords.z*4,0,2*Math.PI,false);
        ctx.fill();
        return tile;
    }
});

L.gridLayer.canvasCircles = function(opts){
    return new L.GridLayer.CanvasCircles(opts);
};

map.addLayer(L.gridLayer.canvasCircles());