var regname=document.getElementsByClassName("reg")[0];
var loginname=document.getElementsByClassName("login")[0];
$(window).ready(function(){
	$.ajax({
		url:"http://127.0.0.1/carobj/php/session.php",
		success:function(res){
			if(res!=0){
				regname.innerHTML="退出";
				loginname.innerHTML="您好，欢迎  "+res;
				//不能跳转
				regname.href="javascript:;";
				loginname.href="javascript:;";
				regname.onclick=function(){
					location.href="http://127.0.0.1/carobj/php/session_des.php";
				}
			}
		}
	});
});




