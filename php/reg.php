<?php
	session_start();
	header("Content-Type:text/html;charset=utf-8");
	include("./link.php");
	@$status=$_POST["status"];
	@$phone=$_POST["phone"];
	@$pwd=$_POST["pwd"];
	$regname = "/^1[345789]\d{9}$/";
	$regpwd = "/^[0-9a-zA-Z]{6,16}$/";
	switch($status){
		case "register":
			if( !empty($phone)&& !empty($pwd)){   //empty()
				@$sql="SELECT `phone` FROM `user` WHERE phone='$phone'";
				@$reg=mysql_query($sql);
				@$row = mysql_fetch_row($reg);
				if( $row > 0 ){
					exit(json_encode(1));//用户名存在
				}
				else{
					$sqlIn="INSERT INTO `user`(`id`, `phone`, `pwd`) VALUES (null,'$phone','$pwd')";
					mysql_query($sqlIn);
					exit(json_encode(0));//注册成功
				}
			}
		break;
		case "login":
			if(preg_match( $regname , $phone ) && preg_match( $regpwd , $pwd ) ){
				@$sqluser="SELECT `phone` FROM `user` WHERE phone='$phone'";
				@$reglogin=mysql_query($sqluser);
				@$rowreg = mysql_fetch_object($reglogin);
				if( $rowreg == "" ){
					exit(json_encode(0));//用户名不存在
				}else{
					@$sqllogin="SELECT `phone`, `pwd` FROM `user` WHERE phone='$phone' and  pwd='$pwd'";
					@$reguser=mysql_query($sqllogin);
					@$rowpwd = mysql_fetch_row($reguser);
					if( $rowpwd > 0 ){
						$_SESSION["phone"]=$phone;
						exit(json_encode(1));//登录成功
						
					}else{
						exit(json_encode(2));//密码错误
					}
				}
			}
		break;
	}
?>