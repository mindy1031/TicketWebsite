<?php
	//开启会话
	session_start();
	//$_SESSION变量赋值空数组
	$_SESSION=array();
	//销毁会话内容
	session_destroy();
	//页面跳转
	$url = "http://127.0.0.1/carobj/index.html" ;  
	echo " <script type = 'text/javascript' > ";  
	echo " window.location.href = '$url' ";  
	echo " </script> ";  
?>