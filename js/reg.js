var code=document.getElementById("code");
var oForm=document.getElementById("form");
var oSpan=document.getElementsByClassName("ospan",oForm);
var oInput=document.getElementsByClassName("borc6",oForm);
document.getElementsTagName()
randomCode();
code.onclick=function(){
	randomCode();
}
oInput[0].onfocus=function(){
	oSpan[0的].innerHTML="手机号码方便找回密码";
}
oInput[0].onblur=function(){
	reg(0,"请输入正确的手机号",/^1[345789]\d{9}$/);
}

oInput[1].onfocus=function(){
	oSpan[1].innerHTML="密码须由6-16个字符组成，区分大小写";
}
oInput[1].onblur=function(){
	reg(1,"请输入正确的密码",/^[0-9a-zA-Z]{6,16}$/);
}
oInput[2].onfocus=function(){
	oSpan[2].innerHTML="请再次输入密码";
}
oInput[2].onblur=function(){
	oSpan[2].innerHTML="";
	oSpan[2].style.color="#666";
	oInput[2].style.borderColor="#ccc";
	var val2=oInput[2].value;
	if(val2){
		if(val2!=oInput[1].value){
			oInput[2].style.borderColor="#f00";
			oSpan[2].innerHTML="密码不一致";
			oSpan[2].style.color="#f00";
		}else{
			oInput[2].style.borderColor="#ccc";
			oSpan[2].style.color="#666";
		}
	}
}
oInput[3].onfocus=function(){
	oSpan[3].innerHTML="请输入验证码";
}
oInput[3].onblur=function(){
	oSpan[3].innerHTML="";
	oSpan[3].style.color="#666";
	oInput[3].style.borderColor="#ccc";
	var val=oInput[3].value;
	if(val){
		if((code.innerHTML).toLowerCase()!=val.toLowerCase()){
			oInput[3].style.borderColor="#f00";
			oSpan[3].innerHTML="请输入正确的验证码";
			oSpan[3].style.color="#f00";
		}else{
			oInput[3].style.borderColor="#ccc";
			oSpan[3].style.color="#666";
		}
	}
}
oInput[4].onfocus=function(){
	oSpan[4].innerHTML="请输入短信验证";
}
oInput[4].onblur=function(){
	reg(4,"校验错误,请重新输入",/^\d{6}$/);
}

function randomCode(){
	var str="";
	var arr=new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
	for(var i=0;i<4;i++){
		str+=arr[parseInt(Math.random()*arr.length)];
	}
	code.innerHTML=str;
}
function reg(index,message,regs){
	oSpan[index].innerHTML="";
	oSpan[index].style.color="#666";
	oInput[index].style.borderColor="#ccc";
	var reg=regs;
	var val=oInput[index].value;
	if(val){
		var a=reg.test(val);
		if(!a){
			oInput[index].style.borderColor="#f00";
			oSpan[index].innerHTML=message;
			oSpan[index].style.color="#f00";
			
		}else{
			oInput[index].style.borderColor="#ccc";
			oSpan[index].style.color="#666";
		}	
	}
}
var oBtn=document.getElementById("regbotton");
oBtn.onclick=function(){
	empty(0);
	empty(1);
	empty(2);
	empty(3);
	empty(4);
	if(empty(0) && empty(1) && empty(2) && empty(3) && empty(4)){
		oInput[0].reg=/^1[345789]\d{9}$/;
		oInput[1].reg=/^[0-9a-zA-Z]{6,16}$/;
		oInput[4].reg=/^\d{6}$/;
		var chekBox=document.getElementById("chekbox");
		var val=oInput[0].reg.test(oInput[0].value);
		var val1=oInput[1].reg.test(oInput[1].value);
		var val2=oInput[2].value==oInput[1].value?true:false;
		var val3=(code.innerHTML).toLowerCase()==oInput[3].value.toLowerCase() ? true : false;
		var val4=oInput[4].reg.test(oInput[4].value);
		var val5=chekBox.checked;
		if(val&&val1&&val2&&val3&&val4&&val5){
			$.ajax({
				type:"post",
				url:"http://127.0.0.1/carobj/php/reg.php",
				data:"status=register&phone="+oInput[0].value+"&pwd="+oInput[1].value,
				success:function(res){
					if(res==0){
						alert("注册成功！");
						for(var i=0;i<oInput.length;i++){
							oInput[i].innerHTML="";
						}
						window.location.href="http://127.0.0.1/carobj/login.html";
						randomCode();
					}else{
						oSpan[0].innerHTML="已注册";
						oSpan[0].style.color="#f00";
						randomCode();
					}
				}
			})
		}
	}
}
function empty(index){
	if(oInput[index].value==""){
		oSpan[index].innerHTML="信息不能为空";
		oSpan[index].style.color="#f00";
		return false;
	}else{
		return true;	
	}
}