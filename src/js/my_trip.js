define(function(require){
	var Public   = require('Public');
	$.ajax({
		type: 'GET',
		url: './datas/my_tripDatas.js',
		dataType: 'json',		
		success: function(data){
			var ress = data;
			console.log(1);
			if(ress.status && ress.data){
				Public.temp('../src/tpl/my_trip.tpl.html', ress, $(".my_trip01"), {appendChild: true});		
				console.log($(".my_trip01 li"));
				console.log(3);
				$(".my_trip01 li").on('click', function(){
					console.log($(".my_trip01 li"));
					$(this).find(".menu-list1").slideDown().siblings("span").hide();
					$(this).siblings("li").find(".menu-list1").slideUp().siblings("span").show();	
				});
				// console.log($(".my_trip01 li"));
				// $(".my_trip01").on('click', 'li', function(){
				// 	console.log(11111);
				// 	$(this).find(".menu-list1").slideDown().siblings("span").hide();
				// 	$(this).siblings("li").find(".menu-list1").slideUp().siblings("span").show();	
				// });
		
			}
		},
		error: function(xhr){
			console.log(xhr);
		}
	});
})
				// console.log($(".my_trip01 li"));		
				// $(".my_trip01 li").click(function(){
				// 	console.log($(".my_trip01 li"));
				// 	$(this).find(".menu-list1").slideDown().siblings("span").hide();
				// 	$(this).siblings("li").find(".menu-list1").slideUp().siblings("span").show();	
				// });
