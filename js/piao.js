var piao_start=document.getElementById("piao_start");
var piao_arrive=document.getElementById("piao_arrive");
var piao_date=document.getElementById("piao_date");
var piao_query=document.getElementById("piao_query");
var change=document.getElementById("change");
var piao_start_value;
var piao_arrive_value;
var piao_date_value;
var tbody=document.getElementById("tbody");


//获取地址栏的参数
function GetQueryString(name){
	//正则验证   1、找到&开头（^）以&结尾($)    "(^|&)s=([^&]*)(&|$)"
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	//window.location.search 查询(参数)部分  截取  从？之后
    var r = window.location.search.substr(1).match(reg);
	//判断 如何查询的结果不为空的话，把查询结果通过decodeURI转出来
    if(r!=null){
     	return  decodeURI(r[2]);
     } 
     return null;
}

function query(){
	piao_start_value=piao_start.value;
	piao_arrive_value=piao_arrive.value;
	piao_date_value=piao_date.value;
	if( piao_start_value && piao_arrive_value && piao_date_value ){
		$.ajax({
			type:"post",
			url:"http://127.0.0.1/carobj/php/piao.php",
			data:"Becity="+piao_start_value+"&Encity="+piao_arrive_value+"",
			success:function(res){
				res=JSON.parse(res);
				if(res==""){
					tbody.innerHTML="<tr><td class='font_meg' colspan='5'>未查询到该信息</td></tr>"
				}else{
					var tr="";
					tbody.innerHTML="";
					for(var i=0;i<res.length;i++){
						tr+='<tr>\
							<td class="timesboxf"><span class="starttime">'+res[i].time+'</span></td>\
							<td class="posiboxf">\
								<s class="positopioc"></s>\
								<b class="posib">'+res[i].Becity+'</b>\
								<br/>\
								<s class="posibotioc"></s>\
								<b class="posib">'+res[i].Encity+'</b>\
							</td>\
							<td class="cartyf"><span class="carty">'+res[i].CarType+'</span></td>\
							<td class="moneyf"><span class="money">￥'+res[i].pirce+'</span></td>\
							<td class="bookf"><a href="http://127.0.0.1/carobj/indent.html?&date='+piao_date_value+'&time='+res[i].time+'&Encity='+res[i].Encity+'&CarType='+res[i].CarType+'&pirce='+res[i].pirce+'" class="book">预订</a></td>\
						</tr>';
					}
					tbody.innerHTML+=tr;
				}
			}
		});
	}else{
		alert("信息不能为空")
	}
}

s=GetQueryString("s");
a=GetQueryString("a");
d=GetQueryString("d");

if(s!=null){
	piao_start.value=s;
	piao_arrive.value=a;
	piao_date.value=d;
	$(window).ready(function(){
		query();
	})
	
}

change.onclick=function(){
	piao_start_value=piao_start.value;
	piao_arrive_value=piao_arrive.value;
	piao_start.value=piao_arrive_value;
	piao_arrive.value=piao_start_value;
}
piao_query.onclick=query;

$("#piao_arrive").focus(function(){
	$("#hidecitys").show();
	$("#hidecitys a").click(function(){
		$("#piao_arrive").val($(this).html());
		$("#hidecitys").hide();
	})
})

$("#piao_arrive").blur(function(){
	setTimeout(function(){
		$("#hidecitys").hide();
	},300)
		
})















