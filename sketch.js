var ship,water;
var shipImg,bombImg,bgImg,waterImg;



function preload(){
    //shipImg = loadImage("images/ship.png");

    shipImg = loadAnimation("images/ship.png","images/ship2.png","images/ship.png")
    bombImg = loadAnimation("images/bomb.png");

    bgImg = loadImage("images/skybg.jpg");

    waterImg = loadImage("images/waterbg.png");

    


}

function setup(){
    createCanvas(800,500);

    water = createSprite(400,380,1200,20);
    water.velocityX = -2;

    water.addImage("water",waterImg);
  //  water.debug = true;

  //  console.log(water.width);

    


     shipImg.frameDelay = 10;

    ship = createSprite(200,330,50,50);
    ship.addAnimation("label1",shipImg);
    ship.addAnimation("label2",bombImg);

    // ship.setVelocity(1,0);
     ship.scale = 0.4;

}

function draw(){
    background(bgImg);

   console.log(water.x);

    if(water.x < 300) {
        water.x = 400;
    }

   
    drawSprites();
}
