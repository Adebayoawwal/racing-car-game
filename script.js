var player=document.getElementsByClassName('playing');
var playerX=document.getElementsByClassName('playing');
var playerY=document.getElementsByClassName('playing');
var speedX=0;
var speedY=0;
function left(){
    playerX += speedX;
    playerY += speedY;
}
function move(e){
    if(e.key == "ArrowUp"){
      speedX= 0;
      speedY= -1;
    }
    if(e.key == "ArrowDown"){
      speedX= 0;
      speedY= 1;
    }    
    if(e.key == "ArrowLeft"){
      speedX= -1;
      speedY= 0;
    }    
    if(e.key == "ArrowUp"){
      speedX=1;
      speedY=-0;
    }
   }
document.addEventListener('keyup',move);