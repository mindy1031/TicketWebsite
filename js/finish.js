
var finish_timer=setInterval(function(){
	var ms=$(".ms").html();
	ms--;
	$(".ms").html(ms);
	if(ms<1){
		window.location.href="http://127.0.0.1/carobj/index.html";
		clearInterval(finish_timer);
	}
	
	
},1000);

