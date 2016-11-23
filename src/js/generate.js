define(function(require){
	$(".generate-type2 li").click(function(){
	$(this).find("a").css({color:'#4c3889'});
	$(this).siblings("li").find("a").css({color:' #b7afbd'});
	})
	var Public   = require('Public'); 
	$.ajax({
		type: 'GET',
		url: './datas/generateDatas.js',
		dataType: 'json',
		success: function(data){
			var ress = data;
			console.log(ress.data);
			if(ress.status && ress.data){
				Public.temp('../src/tpl/generate.tpl.html', ress, $(".menu-list"), {appendChild: true});
			}
		},
		error: function(xhr){
			console.log(xhr);
		}
	});
})