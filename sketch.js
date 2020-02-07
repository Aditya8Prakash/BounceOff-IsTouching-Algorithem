var r1,r2,l1,l2;
function setup() {
createCanvas(800,400);
r1=createSprite(200, 200, 50, 50);
r1.shapeColor="green";
r1.velocityX=5;
r2=createSprite(600, 200, 50, 50);
r2.shapeColor="green";
r2.velocityX=-5;
l1=createSprite(20,200,10,400);
l2=createSprite(780,200,10,400);
}
function draw() {
background(100,100,100);  
bounceOff(r1,r2);
bounceOff(l1,r1);
bounceOff(l2,r2);
if (isTouching(l1,r1)) {
l1.shapeColor="blue";
r1.shapeColor="red";
} else {
l1.shapeColor="black";
r1.shapeColor="green";
}
if (isTouching(l2,r2)) {
l2.shapeColor="blue";
r2.shapeColor="red";
} else {
l2.shapeColor="black";
r2.shapeColor="green";
}
drawSprites();
}