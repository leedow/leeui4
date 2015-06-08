/**
 * leeui check widget
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-05-27 10:09:58
 * @version $Id$
 */
leeui.widgets.check = (function(){
	function initRadio(){
		$('.radio-box').on('click', function(){
			var name = $(this).attr('name');
			var val = $(this).attr('value');
			var elements = $('.radio-box[name="' + name + '"]');
			elements.removeClass('checked');
			$(this).addClass('checked');
			$('input[name="' + name + '"][value="' + val + '"]').prop('checked', true);
		});
	}

	function initCheckbox(){
		$('.check-box').on('click', function(){
			var name = $(this).attr('name');
			var val = $(this).attr('value');
			var cla = $(this).attr('class');


			if(cla.indexOf("checked") >=0){
				$(this).removeClass('checked');
				$('input[name="' + name + '"][value="' + val + '"]').prop('checked', false);
			} else {
				$(this).addClass('checked');
				$('input[name="' + name + '"][value="' + val + '"]').prop('checked', true);
			}

		
		});
	}

	function init(){
		initCheckbox();
		initRadio();
	}


	return {
		init: init
	}
})()