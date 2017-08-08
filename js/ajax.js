var $=(function(){
		var ajax = function(mJson){
			method=mJson.method||"get";
			url=mJson.url;
			data=mJson.data||"";
			ansy=mJson.ansy||true;
			fn=mJson.fn;
			var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Micorsoft.XMLHTTP");
			xhr.open(method,url,ansy);
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=utf-8");	
			xhr.send(data);
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					if(xhr.status>=200&&xhr.status<300){
						fn&&fn(xhr.responseText);
					}else{
						console.log(xhr.status);
					}
				}
			}
		}
	return {"ajax":ajax};
})();


