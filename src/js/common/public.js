define(function(require){
	var template = require('template'); 
	var Public = {
		temp: function(tpl, obj, ele, append){
			if(!append){
				append = {};
			}
			$.ajax({
				type: 'GET',
				url: tpl,
				dataType: 'text',
				async : false,
				success: function(data){
					var render = template.compile(data);
					var html = render(obj);

					if(append.appendChild){
						ele.append(html);
					}else{
						ele.html(html);
					}
					console.log('2');			
				},
				error: function(xhr){
					console.log(xhr);
				}
			});
		}
	}
	return Public;			
});