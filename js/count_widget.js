/**
 * leeui 数字选择器
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-05-16 14:05:03
 * @version $Id$
 */
leeui.widgets.count = (function(){
	var obj;
	//初始化DOM
	function init(){
		obj = $('.count-widget');
		add();
		sub();	
	}

	function add(){
		obj.find('.plus').click(function(){
			var input = $(this).parent('.count-widget').find('input');
			var count = input.val();
			count++;
			input.val(count);
		});
	}

	function sub(){
		obj.find('.sub').click(function(){
			var input = $(this).parent('.count-widget').find('input');
			var count = input.val();
			if (count > 0) {
				count--;
			};
			input.val(count);
		});	
	}

	return {
		init: init
	}
})()

