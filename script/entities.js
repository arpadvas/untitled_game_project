caReady = false;
var characterAtlas = new Image();
characterAtlas.onload = function () {
  caReady = true;
};
characterAtlas.src = "pics/characters.png";
//characterAtlas.src = "https://s12.postimg.org/3sw8ds5t9/characters.png";

oaReady = false;
var otherAtlas = new Image();
otherAtlas.onload = function () {
  oaReady = true;
};
otherAtlas.src = "pics/things.png";
//otherAtlas.src = "https://s16.postimg.org/bbnbkj21h/things.png";

iaReady = false;
var itemAtlas = new Image();
itemAtlas.onload = function () {
  iaReady = true;
};
otherAtlas.src = "pics/things.png";
//itemAtlas.src = "https://s21.postimg.org/5gb1bt56v/items.png";

var spriteTiles = {
  coordinatesRight : [0, 0, 0, 0, 0, 16, 16, 16, 16, 16, 32, 32, 32, 32, 32],
  coordinatesLeft : [32, 32, 32, 32, 32, 16, 16, 16, 16, 16, 0, 0, 0, 0, 0],
  coordinatesTop : [0, 0, 0, 0, 0, 16, 16, 16, 16, 16, 32, 32, 32, 32, 32],
  coordinatesBottom : [0, 0, 0, 0, 0, 16, 16, 16, 16, 16, 32, 32, 32, 32, 32],
  frameRight : 0,
  frameLeft : 0,
  frameTop : 0,
  frameBottom : 0
};

var doorTiles = {
  coordinates : [0, 16, 16, 32, 32, 48],
  frame : 0
};

var potTiles = {
  coordinates : [0, 16, 16, 32, 32, 48],
  frame : 0
};

var switchTiles = {
  coordinates : [48, 64, 64, 80],
  frame : 0
};

var torchTiles = {
  coordinates : [0, 0, 0, 0, 0, 16, 16, 16, 16, 16, 32, 32, 32, 32, 32],
  frame : 0
};

var characterTiles = [
                        {x: 0, y: 0}, {x: 16, y: 0}, {x: 32, y: 0}, {x: 48, y: 0}, {x: 64, y: 0}, {x: 80, y: 0}, {x: 96, y: 0}, {x: 112, y: 0}, {x: 128, y: 0}, {x: 144, y: 0}, {x: 160, y: 0}, {x: 176, y: 0},
                        {x: 0, y: 16}, {x: 16, y: 16}, {x: 32, y: 16}, {x: 48, y: 16}, {x: 64, y: 16}, {x: 80, y: 16}, {x: 96, y: 16}, {x: 112, y: 16}, {x: 128, y: 16}, {x: 144, y: 16}, {x: 160, y: 16}, {x: 176, y: 16},
                        {x: 0, y: 32}, {x: 16, y: 32}, {x: 32, y: 32}, {x: 48, y: 32}, {x: 64, y: 32}, {x: 80, y: 32}, {x: 96, y: 32}, {x: 112, y: 32}, {x: 128, y: 32}, {x: 144, y: 32}, {x: 160, y: 32}, {x: 176, y: 32},
                        {x: 0, y: 48}, {x: 16, y: 48}, {x: 32, y: 48}, {x: 48, y: 48}, {x: 64, y: 48}, {x: 80, y: 48}, {x: 96, y: 48}, {x: 112, y: 48}, {x: 128, y: 48}, {x: 144, y: 48}, {x: 160, y: 48}, {x: 176, y: 48},
                        {x: 0, y: 64}, {x: 16, y: 64}, {x: 32, y: 64}, {x: 48, y: 64}, {x: 64, y: 64}, {x: 80, y: 64}, {x: 96, y: 64}, {x: 112, y: 64}, {x: 128, y: 64}, {x: 144, y: 64}, {x: 160, y: 64}, {x: 176, y: 64},
                        {x: 0, y: 80}, {x: 16, y: 80}, {x: 32, y: 80}, {x: 48, y: 80}, {x: 64, y: 80}, {x: 80, y: 80}, {x: 96, y: 80}, {x: 112, y: 80}, {x: 128, y: 80}, {x: 144, y: 80}, {x: 160, y: 80}, {x: 176, y: 80},
                        {x: 0, y: 96}, {x: 16, y: 96}, {x: 32, y: 96}, {x: 48, y: 96}, {x: 64, y: 96}, {x: 80, y: 96}, {x: 96, y: 96}, {x: 112, y: 96}, {x: 128, y: 96}, {x: 144, y: 96}, {x: 160, y: 96}, {x: 176, y: 96},
                        {x: 0, y: 112}, {x: 16, y: 112}, {x: 32, y: 112}, {x: 48, y: 112}, {x: 64, y: 112}, {x: 80, y: 112}, {x: 96, y: 112}, {x: 112, y: 112}, {x: 128, y: 112}, {x: 144, y: 112}, {x: 160, y: 112}, {x: 176, y: 112}
                     ];

function Entity(image, sourceX, sourceY, swidth, sheight, x, y, width, height, acted) {
    this.image = image;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
    this.swidth = swidth;
    this.sheight = sheight;
    this.x = x;
    this.y = y;
    this.acted = acted;
}

Entity.prototype.render = function() {
    ctx = gameArea.context;
    ctx.drawImage(this.image, this.sourceX, this.sourceY, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
}

Entity.prototype.acter = function() {
    this.acted = 1;
}

var npcs = [];

function Hero(image, sourceX, sourceY, swidth, sheight, x, y, width, height, walkable, type, acted) {
    Entity.call(this, image, sourceX, sourceY, swidth, sheight, x, y, width, height, acted);
    this.speed = 64;
    this.type = type;
    if (walkable === 1) {
      nonWalkableArea.push(new createNonWalkableArea(this.x, this.y, this.width, this.height));
    }
}

var items = [];

function Item(image, sourceX, sourceY, swidth, sheight, x, y, width, height, walkable, type, doable, acted) {
    Entity.call(this, image, sourceX, sourceY, swidth, sheight, x, y, width, height, acted);
    this.type = type;
    this.doable = doable;
    if (walkable === 1) {
      nonWalkableArea.push(new createNonWalkableArea(this.x, this.y, this.width, this.height));
    }
    this.open = function () {
       this.sourceY = doorTiles.coordinates[doorTiles.frame];
       if (doorTiles.frame != 5) {
         doorTiles.frame = (doorTiles.frame + 1);
       } 
       else {
         doorTiles.frame = 5;
         isItemOpen = false;
       }
    }
    this.burn = function () {
       this.sourceX = torchTiles.coordinates[torchTiles.frame];
       torchTiles.frame = (torchTiles.frame + 1) % torchTiles.coordinates.length;
    }
    this.switch = function () {
       this.sourceX = switchTiles.coordinates[switchTiles.frame];
       if (switchTiles.frame != 3) {
         switchTiles.frame = (switchTiles.frame + 1);
       } 
       else {
         switchTiles.frame = 3;
         isItemSwitched = false;
       }
    }
    this.kick = function () {
       this.sourceY = potTiles.coordinates[potTiles.frame];
       if (potTiles.frame != 5) {
         potTiles.frame = (potTiles.frame + 1);
       } 
       else {
         potTiles.frame = 5;
         isItemBroken = false;
       }
    }
}

Item.prototype = Object.create(Entity.prototype);
Hero.prototype = Object.create(Entity.prototype);

var texts = [
             " ", 
             "You can't open this item!", 
             "There is nothing to switch here!", 
             "Do you wanna break your leg?", 
             "What a luck! You found a bronze key!", 
             "What a luck! You found a silver key!", 
             "The monk gives you a parchment with one word on it:", 
             "'Gloria'. You will use this password when needed!",
             "There is no one to talk to!",
             "You don't seem to be having the right key!",
             "To use it find the password first!",
             "Press H for help!",
             "To control your character press narrow keys!",
             "Open: 'O', Switch: 'S', Talk: 'T', Kick: 'K'",
             "You made it to get out! Hats off to you! :)",
             "Sorry Sir but I can't help you more..."
            ];
var textFrame = 0

var msgs = [];

function Message(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
}

Message.prototype.render = function() {
    ctx = gameArea.context;
    ctx.font = "12px Merienda"
    ctx.fillStyle = "white";
    ctx.fillText(this.text, this.x, this.y);
}

Message.prototype.zero = function() {
    textFrame += 1;
    if (textFrame === 300) {
      textFrame = 0;
      msgs[0].text = texts[0];
      msgs[1].text = texts[0];
      msgs[2].text = texts[0];
      msgs[3].text = texts[0];
    }
}

var sounds = [];


function Sound(src, volume, loop) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.volume = volume;
    this.sound.loop = loop;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}
