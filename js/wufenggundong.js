var videoB=document.getElementById("videob");
var videoC=document.getElementById("videoc");
var oLeft=document.getElementById("left");
var oRight=document.getElementById("right");
var videoUl=document.getElementById("videoul");
var videolist=document.getElementsByClassName("videolist");

var oW=videoC.offsetWidth;
var c=0;
var wu_timer=null;
var onOff=true;
clearInterval(wu_timer);
videoB.onmouseover=function(){
	clearInterval(wu_timer);
}
videoB.onmouseout=function(){
	wu_timer=setInterval(move,3000);
}
wu_timer=setInterval(move,3000);

oLeft.onclick=function(){
	if(onOff){
		onOff=false;
		c--;
		if(c<0){
			c=(videolist.length/3)-2;
			videoUl.style.left=-(c+1)*oW+"px";
		}
		spor(videoUl,{"left":(-c*oW)},function(){
			onOff=true;
		});
	}
}
oRight.onclick=function(){
	if(onOff){
		move();
	}
}
function move(){
	onOff=false;
	c++;
	if(c>videolist.length/3-1){
		c=1;
		videoUl.style.left="0px";
	}
	spor(videoUl,{"left":(-c*oW)},function(){
		onOff=true;
	});
}

