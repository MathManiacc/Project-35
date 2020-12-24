//Create variables here
var dog, dogImage, happyDog, database, foodS, foodStock;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 400, 30, 30);
  dog.addImage(dogImage);

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  textSize(8);
  stroke(0);
  fill(0);
  text("Food: " + foodS, 50, 50);
  text("Note: Press UP_ARROW Key to Feed Drago Milk", 50, 150);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


