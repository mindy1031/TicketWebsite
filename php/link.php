<?php
	header("Content-Type:text/html;charset=utf-8");
	@mysql_connect("localhost","root","591031");
	@mysql_select_db("message");
	mysql_query("set names 'utf8'");
?>