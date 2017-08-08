function $(para,obj){
	obj = obj ||document;
	if(typeof para =="function"){
		window.onload=para;
	}else if(typeof para =="string"){
		if(para.substring(0,1)=="#"){
			return obj.getElementById(para.substring(1));
		}else if(para.substring(0,1)=="."){
			if(document.getElementsByClassName){
				return obj.getElementsByClassName(para.substring(1));
			}else{
				var str=[];
				var all=obj.getElementsByTagName("*");
				for(var i=0;i<all.length;i++){
					var alls=all[i].className.split(" ");
					for(var j=0;j<alls.length;j++){
						if(alls[j]==para.substring(1)){
							str.push(all[i]);
						}
					}
				}
				return str;
			}
		}else{
			return obj.getElementsByTagName(para);
		}
	}
}