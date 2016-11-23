define(function(require){
	var Public   = require('Public'); 
	$.ajax({
		type: 'GET',
		url: './datas/itineraryDatas.js',
		dataType: 'json',
		success: function(data){
			var ress = data;
			console.log(ress.data);
			if(ress.status && ress.data){
				Public.temp('../src/tpl/itinerary.tpl.html', ress, $(".menu-list"), {appendChild: true});
			}
		},
		error: function(xhr){
			console.log(xhr);
		}
	});
})