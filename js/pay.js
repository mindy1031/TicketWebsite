
$(".payment li").click(function(){
	$(this).addClass("first").siblings().removeClass("first");
	$(".img img").eq($(this).index()).addClass("first").siblings().removeClass("first");
	
})
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
$(".moneys").html(GetQueryString("money"))
