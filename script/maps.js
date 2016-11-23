taReady = false;
var tileAtlas = new Image();
tileAtlas.onload = function () {
  taReady = true;
};
tileAtlas.src = "pics/basictiles.png";
//tileAtlas.src = "https://s14.postimg.org/fiqkv6wmp/basictiles.png";

var mapTiles = [
              {x: 0, y: 0}, {x: 16, y: 0}, {x: 32, y: 0}, {x: 48, y: 0}, {x: 64, y: 0}, {x: 80, y: 0}, {x: 96, y: 0}, {x: 112, y: 0},
              {x: 0, y: 16}, {x: 16, y: 16}, {x: 32, y: 16}, {x: 48, y: 16}, {x: 64, y: 16}, {x: 80, y: 16}, {x: 96, y: 16}, {x: 112, y: 16},
              {x: 0, y: 32}, {x: 16, y: 32}, {x: 32, y: 32}, {x: 48, y: 32}, {x: 64, y: 32}, {x: 80, y: 32}, {x: 96, y: 32}, {x: 112, y: 32},
              {x: 0, y: 48}, {x: 16, y: 48}, {x: 32, y: 48}, {x: 48, y: 48}, {x: 64, y: 48}, {x: 80, y: 48}, {x: 96, y: 48}, {x: 112, y: 48},
              {x: 0, y: 64}, {x: 16, y: 64}, {x: 32, y: 64}, {x: 48, y: 64}, {x: 64, y: 64}, {x: 80, y: 64}, {x: 96, y: 64}, {x: 112, y: 64},
              {x: 0, y: 80}, {x: 16, y: 80}, {x: 32, y: 80}, {x: 48, y: 80}, {x: 64, y: 80}, {x: 80, y: 80}, {x: 96, y: 80}, {x: 112, y: 80},
              {x: 0, y: 96}, {x: 16, y: 96}, {x: 32, y: 96}, {x: 48, y: 96}, {x: 64, y: 96}, {x: 80, y: 96}, {x: 96, y: 96}, {x: 112, y: 96},
              {x: 0, y: 112}, {x: 16, y: 112}, {x: 32, y: 112}, {x: 48, y: 112}, {x: 64, y: 112}, {x: 80, y: 112}, {x: 96, y: 112}, {x: 112, y: 112},
              {x: 0, y: 128}, {x: 16, y: 128}, {x: 32, y: 128}, {x: 48, y: 128}, {x: 64, y: 128}, {x: 80, y: 128}, {x: 96, y: 128}, {x: 112, y: 128},
              {x: 0, y: 144}, {x: 16, y: 144}, {x: 32, y: 144}, {x: 48, y: 144}, {x: 64, y: 144}, {x: 80, y: 144}, {x: 96, y: 144}, {x: 112, y: 144},
              {x: 0, y: 160}, {x: 16, y: 160}, {x: 32, y: 160}, {x: 48, y: 160}, {x: 64, y: 160}, {x: 80, y: 160}, {x: 96, y: 160}, {x: 112, y: 160},
              {x: 0, y: 176}, {x: 16, y: 176}, {x: 32, y: 176}, {x: 48, y: 176}, {x: 64, y: 176}, {x: 80, y: 176}, {x: 96, y: 176}, {x: 112, y: 176},
              {x: 0, y: 192}, {x: 16, y: 192}, {x: 32, y: 192}, {x: 48, y: 192}, {x: 64, y: 192}, {x: 80, y: 192}, {x: 96, y: 192}, {x: 112, y: 192},
              {x: 0, y: 208}, {x: 16, y: 208}, {x: 32, y: 208}, {x: 48, y: 208}, {x: 64, y: 208}, {x: 80, y: 208}, {x: 96, y: 208}, {x: 112, y: 208},
              {x: 0, y: 224}, {x: 16, y: 224}, {x: 32, y: 224}, {x: 48, y: 224}, {x: 64, y: 224}, {x: 80, y: 224}, {x: 96, y: 224}, {x: 112, y: 224}
            ];

var nonWalkableArea = [];

function createNonWalkableArea(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

var map = {
    cols: 32,
    rows: 32,
    tsize: 16,
    layers: [[
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,4,15,4,23,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,2,15,2,23,0,0,0,
              0,0,0,0,0,0,0,0,0,23,23,23,23,23,23,23,23,0,0,0,0,0,0,0,23,2,15,2,23,0,0,0,
              0,0,0,0,0,0,0,0,0,23,16,16,16,16,16,16,23,0,0,0,0,0,0,0,23,2,15,2,23,0,0,0,
              23,23,23,23,23,23,23,23,23,23,15,15,15,15,15,15,23,23,23,23,23,23,23,23,23,3,15,3,23,0,0,0,
              16,16,16,16,16,16,16,16,16,16,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,15,15,15,23,0,0,0,
              15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,23,0,0,0,
              15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,23,0,0,0,
              15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,23,0,0,0,
              23,23,23,23,23,4,15,15,15,4,23,23,23,23,23,4,1,1,1,1,4,1,1,1,1,15,15,15,23,23,23,0,
              0,0,0,0,0,2,15,15,15,2,0,0,0,0,0,2,15,15,15,15,2,15,15,15,15,15,15,15,16,16,23,0,
              0,0,0,0,0,2,15,15,15,2,0,0,0,0,0,2,15,15,15,15,2,15,15,15,15,15,15,15,15,15,23,0,
              0,0,0,0,0,2,15,15,15,2,0,0,0,0,0,2,1,1,15,1,1,15,15,15,15,15,15,15,15,15,23,0,
              0,0,0,0,0,2,15,15,15,2,0,0,0,0,0,2,15,15,15,15,15,15,15,15,15,15,15,15,15,15,23,0,
              0,0,0,0,0,2,15,15,15,2,0,0,0,0,0,2,15,15,15,15,15,15,15,15,15,15,15,15,15,15,23,0,
              0,0,0,0,0,2,15,15,15,2,0,0,0,0,0,2,15,15,15,15,4,1,1,1,1,15,15,15,23,23,23,0,
              0,0,4,1,1,2,15,15,15,1,1,1,4,0,0,2,15,15,15,15,2,0,0,0,23,15,15,15,23,0,0,0,
              0,0,2,15,15,2,15,15,15,15,15,15,2,0,0,3,1,1,1,1,3,0,0,0,23,15,15,15,23,0,0,0,
              0,0,2,15,15,2,15,15,15,15,15,15,2,0,0,0,0,0,0,0,0,0,0,0,23,15,15,15,23,0,0,0,
              0,0,2,3,15,3,15,15,15,15,15,15,2,0,0,0,0,0,0,0,0,0,0,0,23,15,15,15,23,0,0,0,
              0,0,2,15,15,15,15,15,15,15,15,15,2,0,0,0,0,0,0,0,0,0,0,0,23,15,15,15,23,0,0,0,
              0,0,2,15,15,15,15,15,15,15,15,15,2,0,23,23,23,23,23,23,23,23,23,23,23,15,15,15,23,0,0,0,
              0,0,3,1,1,1,1,1,1,1,1,1,3,0,23,16,16,16,16,16,16,16,16,16,16,15,15,15,23,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,15,15,15,15,15,15,15,15,15,15,15,15,15,23,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,15,15,15,15,15,15,15,15,15,15,15,15,15,23,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,15,15,15,15,15,15,15,15,15,15,15,15,15,23,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,15,15,15,15,15,15,15,15,15,15,15,15,15,23,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,15,15,15,15,15,15,15,15,15,15,15,15,15,23,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,23,23,23,23,23,23,23,23,23,23,15,15,15,23,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,15,15,15,23,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,15,15,15,23,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,23,23,23,23,0,0,0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]],
    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols + col];
    },
    tileCreator: function(layer) {
    for (var c = 0; c < this.cols; c++) {
        for (var r = 0; r < this.rows; r++) {
            var tile = this.getTile(layer, c, r);
              if (tile !== 0 && taReady === true) {
                  gameArea.context.drawImage(tileAtlas, mapTiles[tile-1].x, mapTiles[tile-1].y, 16, 16, c * this.tsize, r * this.tsize, this.tsize, this.tsize);
                  if (tile === 1 || tile === 2 || tile === 3 || tile === 4 || tile === 16 || tile === 23) {
                    nonWalkableArea.push(new createNonWalkableArea(c * this.tsize, r * this.tsize, this.tsize, this.tsize));
                  }
              }
        }
      }
    }
};