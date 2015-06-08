/**
 * Dialog plugin
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-05-19 21:37:28
 * @version $Id$
 */
leeui.widgets.dialog = (function(){
	function init(){
		$('.close-dialog').click(function(){
			$(this).parents('.dialog').hide();
		});

		//$('.dialog').css('height', $('body').height());


		$.dialog = function(option){
			var obj = $(option.name);
			obj.show();

			if (option.open != undefined) {
				option.open();
			};
/*
			if (option.close != undefined) {
				obj.find('.close-dialog').on('click', function(){
					option.close();
				});
			};*/
		} 
	}

	return {
		init: init
	}
})();
