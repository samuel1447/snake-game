var scl = 20;

var edges;



function setup() {
  createCanvas(800,400);
  snake=new Snake();


}

function draw() {
  background(0,0,0); 
  snake.show();
  snake.update();

  edges = createEdgeSprites();

 if(snake.isTouching(edges[0])
 || snake.isTouching(edges[1])
 || snake.isTouching(edges[2])
 || snake.isTouching(edges[3])
 ){
   text("GAME OVER",400,200);
 }

  drawSprites();

}

function keyPressed(){
  if(keyCode===38){
    snake.snakeDirection(0,-10)
  }
  else if(keyCode===37){
    snake.snakeDirection(-10,0)
  }
  else if(keyCode===39){
    snake.snakeDirection(10,0)
  }
  else if(keyCode===40){
    snake.snakeDirection(0,10)
  }
}
