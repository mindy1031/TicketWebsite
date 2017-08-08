var ind_start=document.getElementById("ind_start");
var ind_arrive=document.getElementById("ind_arrive");
var ind_date=document.getElementById("ind_date");
var ind_query=document.getElementById("ind_query");
ind_query.onclick=function(){
	var ind_start_val=ind_start.value;
	var ind_arrive_val=ind_arrive.value;
	var ind_date_val=ind_date.value;
	if( ind_start_val && ind_arrive_val && ind_date_val ){
		ind_query.setAttribute('href','piao.html?s='+ind_start_val+'&a='+ind_arrive_val+'&d='+ind_date_val)
	}else{
		alert("查询信息不能为空")
	}
}

$("#ind_arrive").focus(function(){
	$("#hidecitys").show();
	$("#hidecitys a").click(function(){
		$("#ind_arrive").val($(this).html());
		$("#hidecitys").hide();
	})
})

$("#ind_arrive").blur(function(){
	setTimeout(function(){
		$("#hidecitys").hide();
	},300)
		
})
