//Game State
var CUT = 1
var END = 0
var gameState = CUT;

var keys, keysImage;
var treasure1, treasure2, treasureGroup, treasure

var pirate, pirateImage, pirateGroup;

var gameOver, gameOverImage;

var score = 0;

var treasureGroup, pirateGroup

var score = 0;

function preload() {


  createCanvas(400, 400);


  keysImage = loadImage("key.png")

  treasure1 = loadImage("treasure.png")
  treasure2 = loadImage("treasure2.png")


  pirateImage = loadImage("pirate.png");

  gameOverImage = loadImage("gameover.png")
}

function setup() {

  keys = createSprite(40, 200, 20, 20)
  keys.addImage(keysImage);
  keys.scale = 0.1

  treasureGroup = createGroup();
  pirateGroup = createGroup();
}

function draw() {

  background("deepSkyBlue")
  text("Score:" + score, 300, 50)

  if (gameState === 1) {
    treasures();
    pirates();
    keys.y = mouseY
    keys.x = mouseX

    if (treasureGroup.isTouching(keys)) {
      treasureGroup.destroyEach();

      score = score + 2
    }


    treasureGroup.setVelocityXEach = -(4 + 3 * score / 50)

  }
  if (pirateGroup.isTouching(keys)) {
    gameState = 0;
  }

  if (gameState === 0) {
    pirateGroup.destroyEach();
    treasureGroup.destroyEach();
    keys.addImage(gameOverImage)
    keys.scale = 1
    keys.x = 200
    keys.y = 200
  }

 // console.log(frameCount);

  drawSprites();
}

function treasures() {
  if (frameCount % 50 === 0) {
    treasure = createSprite(400, 200, 20, 20)
    treasure.scale = 0.2
    var rand = Math.round(random(1, 2))
    if (rand == 1) {
      treasure.addImage(treasure1)
      treasure.scale = 0.2
    }
    if (rand == 2) {
      treasure.addImage(treasure2)
      treasure.scale=0.05
    }

    treasure.y = Math.round(random(50, 340))

    treasure.velocityX = -7
    treasure.setLifetime = 100

    treasureGroup.add(treasure);
    console.log(rand);
  }
}

function pirates() {
  if (frameCount % 100 === 0) {
    pirate = createSprite(400, 200, 20, 20);
    pirate.addImage(pirateImage);
pirate.scale=0.2
    pirate.velocityX = -8;
    pirate.SetLifetime = 50;

    pirateGroup.add(pirate);
  }
}