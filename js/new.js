//获取ul
var newsli=document.getElementsByClassName("newsli")[0];

var pagenum=document.getElementsByClassName("pagenum")[0];
var pagecurr=document.getElementsByClassName("pagecurr")[0];
//首页
var homepage=document.getElementsByClassName("homepage")[0];
//上一页
var prevpage=document.getElementsByClassName("prevpage")[0];
//下一页
var nextpage=document.getElementsByClassName("nextpage")[0];
//尾页
var endpage=document.getElementsByClassName("endpage")[0];

var page = 1; //当前页
var totalPage = 0;//总页数
var pageSize = 10;//每页显示条数
var count=0;//总条目数
$(window).ready(function(){
	$.ajax({
		url:"http://127.0.0.1/carobj/php/new.php",
		success:function(res){
			res = JSON.parse(res);
			count=res.length;
			//获取所有条目数
			pagenum.innerHTML=count;
			//获取总页数
			totalPage=Math.ceil(count/pageSize);
			//显示当前页
			pagecurr.innerHTML=page+"/"+totalPage;
			
	//		点击首页时,显示第十条
			homepage.onclick = function(){
				newsli.innerHTML="";
				var strs="";
				page=1;			
				for(var i=0;i<10;i++){
					strs+='<li>\
						<span>'+res[i].dates+'</span>\
						<a href="video.html">\
							<p>'+res[i].news+'</p>\
						</a>\
					</li>';
				}
				newsli.innerHTML=strs;
				pagecurr.innerHTML=page+"/"+totalPage;
				setTimeout(function(){
					alert("已经是第一页了哟");
				},200);
			}
			//点击上一页
			prevpage.onclick=function(){
				newsli.innerHTML="";
				var strs="";
				page--;
				if(page<1){
					page=1;
					alert("当前已经是第一页了");
				}
				for(var i=pageSize*(page-1);i<pageSize*page;i++){
					strs+='<li>\
						<span>'+res[i].dates+'</span>\
						<a href="video.html">\
							<p>'+res[i].news+'</p>\
						</a>\
					</li>';
				}
				newsli.innerHTML=strs;
				pagecurr.innerHTML=page+"/"+totalPage;
			}
			//点击下一页
			nextpage.onclick=function(){
				newsli.innerHTML="";
				var strs="";
				page++;
				if(page>totalPage){
					page=totalPage;
					alert("当前已经是最一页了");
				}
				console.log(page)
				var max=pageSize*page > 20 ? count : pageSize*page;
				for(var i=pageSize*(page-1);i<max;i++){
					strs+='<li>\
						<span>'+res[i].dates+'</span>\
						<a href="video.html">\
							<p>'+res[i].news+'</p>\
						</a>\
					</li>';
				}
				newsli.innerHTML=strs;
				pagecurr.innerHTML=page+"/"+totalPage;
			}
			//点击尾页
			endpage.onclick=function(){
				newsli.innerHTML="";
				var strs="";
				page=totalPage;
				for(var i=pageSize*(totalPage-1);i<count;i++){
					strs+='<li>\
						<span>'+res[i].dates+'</span>\
						<a href="video.html">\
							<p>'+res[i].news+'</p>\
						</a>\
					</li>';
				}
				newsli.innerHTML=strs;
				pagecurr.innerHTML=page+"/"+totalPage;
				setTimeout(function(){
					alert("已经是最后一页了哟");
				},200);
			}
		}
	});
});
