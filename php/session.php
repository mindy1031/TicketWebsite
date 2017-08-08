<?php
	session_start();
	header("Content-Type:text/html;charset=utf-8");
	header('Access-Control-Allow-Origin:*'); 
	//判断是否设置了session
	if(isset($_SESSION["phone"])){
		echo $_SESSION["phone"];
	}else{
		//未登录
		echo json_encode(0);	
	}
?>