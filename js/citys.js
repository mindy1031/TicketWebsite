var oPro = document.getElementById("province");
var oCity = document.getElementById("city");
var opt = "<option>-----请选择省份-----</option>";
for (var i = 0; i < City.length; i++) {
	opt += "<option>"+City[i].name+"</option>"
}

var City = [{"name":"北京","city":["北京"]},
			{"name":"上海","city":["上海"]},
			{"name":"江苏","city":["南京","徐州"]},
			{"name":"安徽","city":["蚌埠","合肥","淮南","安庆","阜阳","六安","马鞍山"]}]

