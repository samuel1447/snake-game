class Snake{
    constructor(){
        this.x=0;
        this.y=0;
        this.xspeed=0;
        this.yspeed=0;

    }
    snakeDirection(x,y){
        this.xspeed=x;
        this.yspeed=y;

    }

    update(){
        this.x=this.x+this.xspeed;
        this.y=this.y+this.yspeed;
    }

    show(){
        rect(this.x,this.y,scl,scl)

    }

}