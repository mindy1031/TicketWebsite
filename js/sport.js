//运动方法
function spor(obj,Mjion,fn){
	var target;
	clearInterval(obj.timer);
	for(var attr in Mjion){
		target=Mjion[attr];
		obj.timer=setInterval(function(){
			if(attr=="opacity"){
				var oAttri=getStyle(obj,attr)*100;
			}else{
				var oAttri=parseInt(getStyle(obj,attr));
			}
			if(oAttri>target){
				speed=Math.floor((target-oAttri)/30);
			}else{
				speed=Math.ceil((target-oAttri)/30);
			}
			if(oAttri==target){ 
				clearInterval(obj.timer);
				obj.style[attr]=target+"px";
				fn&&fn();
			}else{
				if(attr=="opacity"){
					obj.style[attr]=(oAttri+speed)/100;
					obj.style.filter="alpha(opacity="+(oAttri+speed)+")";
				}else{
					obj.style[attr]=oAttri+speed+"px";
					}
				}
		},14);
	}
}

function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}
