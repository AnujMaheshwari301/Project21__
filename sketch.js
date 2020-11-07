var bullet, wall;
var speed, weight;
var deformatoin=0.5 * weight * speed * speed/22509;
var thickness;
var bullet,speed, weight;
var Damage = 0.5*weight*speed*speed/wall.width
             *wall.width*wall.width

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = Math.round(random(22,83));

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;

  wall  = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(80, 80, 80);

}

function draw() {
  background(255,255,255);
  if(wall.x - bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX=0;
    var Damage = 0.5*weight*speed*speed/wall.width
                 *wall.width*wall.width
    
    if(Damage>10) 
    {
      wall.shapeColor=color(255,0,0);
    }
    if(Damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  

  drawSprites();
}

/*function hasCollided(lbullet, lwall) 
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}*/