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

var dates=$(".date");
var encity=$(".encity");
var typecar=$(".typecar");
var price=$(".price");

var dateCont=GetQueryString("date");
var time=GetQueryString("time");
var encitys=GetQueryString("Encity");
var CarType=GetQueryString("CarType");
var pirce=GetQueryString("pirce");

dates.html(dateCont+"  "+time);
encity.html(encitys);
typecar.html(CarType+"高一席座");
price.html("￥"+pirce);


$(".submit").click(function(){
	$.ajax({
		url:"http://127.0.0.1/carobj/php/session.php",
		success:function(res){
			if(res==0){
				alert("请登录");
				window.location.href="http://127.0.0.1/carobj/login.html";
			}else{
				window.location.href="http://127.0.0.1/carobj/pay.html?&money="+price.html()+"";
			}
		}
	});
})




