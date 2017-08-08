<?php
	header("Content-Type:text/html;charset=utf-8");
	include("./link.php");
	//获取页面中传入的值
	@$becity=$_POST["Becity"];
	@$encity=$_POST["Encity"];
	//判断输入的值是否为空，不为空时做一下操作
	if( !empty($becity) && !empty($encity)){
		//sql查询语句
		@$sql="SELECT * FROM `list` WHERE Becity='$becity' and Encity='$encity'";
		//执行这条语句，并得到返回值
		@$result=mysql_query($sql);
		//新定义一个数组用来存放要取的数据
		$arr = array();
		//数组的下标
		$i = 0;
		//循环语句，把结果集以数组的形式赋值给$ass，当结果集中的数据执行完毕时，结束循环
		while( $ass = mysql_fetch_assoc($result) ){
			//每次循环把结果放入arr数组中
			$arr[$i] = $ass;
			$i++;
		}
		//输出数组
		echo json_encode($arr);
	//如果是空，则返回0
	}else{
		exit(json_encode(0));//信息不能为空
	}
?>