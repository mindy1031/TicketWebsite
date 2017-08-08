var bnright=document.getElementById("bnright");
var bnUl=document.getElementById("bnrul");
var bnUlImg=document.getElementsByClassName("bn_img",bnUl);
var oPoint=document.getElementById("point");
var oPointP=document.getElementsByClassName("pointer",oPoint);
var timer1=null;
var num=0;
bnright.onmouseover=function(){
	clearInterval(timer1);
}
bnright.onmouseout=function(){
	timer1=setInterval(counttimer,2000);
}
clearInterval(timer1);
for(var i=0;i<oPointP.length;i++){
	oPointP[i].index=i;
	oPointP[i].onmouseover=function(){
		num =this.index;
		overs();
	}
}
function counttimer(){
	num++;
	if(num>=oPointP.length){
		num=0;
	}
	overs(oPointP[num],bnUlImg[num]);
}
function overs(){
	for(var j=0;j<oPointP.length;j++){
		oPointP[j].className="pointer";
		bnUlImg[j].className="bn_img";
	}
	oPointP[num].className="pointer first";
	bnUlImg[num].className="bn_img first";
}
timer1=setInterval(counttimer,2000);