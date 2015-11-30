var c=document.createElement("canvas");
c.setAttribute("id", "myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
document.body.appendChild(c);
var ctx = c.getContext("2d");
document.captureEvents(Event.MOUSEMOVE);

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;
var tempX=0;
var tempY=0;
var tx=0;
var ty=0;
var colour="green";

function getMouseXY(e) {
    tempX = e.pageX
    tempY = e.pageY
	
  
  if(((tempX>tx?tempX-tx:tx-tempX)>10)||((tempY>ty?tempY-ty:ty-tempY)>10))
  {
    tx=tempX;
	ty=tempY;
    animation(tempX,tempY,5);
  } 
  return true
}

function animation(x,y,n)
{
   ctx.fillStyle = colour; 
   ctx.fillRect(x,y,n,n);
   setInterval(function(){
     ctx.fillStyle = "#FFF"; 
     ctx.clearRect(x,y,n,n);
     if(n>0)
     {
       n=n-1;
       animation(x-2,y+6,n);
	 }
   },100); 
}

function setTrailColor(c)
{
  colour=c;
}
