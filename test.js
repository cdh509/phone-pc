define(function(require){
	var Public   = require('Public'); 
	
	var itinerary = {
		init: function(){
			this.render();
		},
		// 数据处理
		render: function(){
			var _self = this;
			$.ajax({
				type: 'GET',
				url: './datas/itineraryDatas.js',
				dataType: 'json',
				success: function(data){
					var ress = data;
					console.log(ress.data);
					if(ress.status && ress.data){
						_self.renderMain(ress)
						_self.clicksEle();
					}
				},
				error: function(xhr){
					console.log(xhr);
				}
			});
		},
		// 渲染模板
		renderMain: function(ress){
			Public.temp('../src/tpl/itinerary.tpl.html', ress, $(".menu-list"), {appendChild: true});
		}
		// dom操作
		clicksEle: function(){
			$('li').click(function(){
				console.log(1111);
			})
		}
	}
	itinerary.init();
})