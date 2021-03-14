//Create variables here
var database
var foodS,foodStock 
var dog , dogimg1 , dogimg2
function preload()

{
	//load images here
dogimg1 = loadImage("images/dogImg.png")
dogimg2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database()
  dog = createSprite(400,300,100,100)
  dog.addImage(dogimg1)
  dog.scale = 0.1                                                                        
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  textSize(20)
  
}
function readStock(data){foodS = data.val()}

function draw() {  
background('purple')
if(keyWentUp(UP_ARROW)){
  writeStock(foodS) 
  dog.addImage(dogimg2)

}

  drawSprites();
  fill('blue')
  text("food remaining:"+foodS,170,200)
  textSize(13)
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  
  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    } 
    database.ref('/').update({
      Food:x
    })
  } 
 
}



