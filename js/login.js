var userName=document.getElementById("username");
var userSpan=document.getElementById("userspan");
var oPassword=document.getElementById("password");
var pwdSpan=document.getElementById("pwdspan");
var loginBtn=document.getElementById("loginbtn");
var loginName;
var loginPwd;
userName.onfocus=function(){
	userSpan.style.color="#bbb";
	userSpan.innerHTML="请输入已校验手机号码";
}
userName.onblur=function(){
	userSpan.innerHTML="";
	loginName=userName.value;
}
oPassword.onfocus=function(){
	pwdSpan.style.color="#bbb";
	pwdSpan.innerHTML="请输入密码";
}
oPassword.onblur=function(){
	pwdSpan.innerHTML="";
	loginPwd=oPassword.value;
}
loginBtn.onclick=function(){
	if(loginName == "" && loginPwd == ""){
		userSpan.innerHTML="用户名不能为空";
		userSpan.style.color="red";
		pwdSpan.innerHTML="密码不能为空";
		pwdSpan.style.color="red";
	}else if(loginPwd == ""){
		pwdSpan.innerHTML="密码不能为空";
		pwdSpan.style.color="red";
	}else if(loginName == ""){
		userSpan.innerHTML="用户名不能为空";
		userSpan.style.color="red";
	}else{
		var reg1=/^1[345789]\d{9}$/;
		var reg2=/^[0-9a-zA-Z]{6,16}$/;
		if(!reg1.test(loginName)){
			userSpan.innerHTML="请输入正确的用户名";
			userSpan.style.color="red";
		}
		if(!reg2.test(loginPwd)){
			pwdSpan.innerHTML="请输入正确的密码";
			pwdSpan.style.color="red";
		}
		if(reg1.test(loginName)&&reg2.test(loginPwd)){
			$.ajax({
				type:"post",
				url:"http://127.0.0.1/carobj/php/reg.php",
				data:"status=login&phone="+loginName+"&pwd="+loginPwd,
				success:function(res){
					if( res == 0 ){
						userSpan.innerHTML="用户名不存在";
						userSpan.style.color="red";
					}else if( res == 2 ){
						pwdSpan.innerHTML="密码错误";
						pwdSpan.style.color="red";
					}else{
						alert("登录成功！");
						window.location.href="http://127.0.0.1/carobj/index.html";
					}
				}
			})
		}
	}
}

