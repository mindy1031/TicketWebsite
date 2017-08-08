<?php
	header("Content-Type:text/html;charset=utf-8");
	include("./link.php");
	//查询所有
	@$sql="SELECT * FROM `new`";
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

?>