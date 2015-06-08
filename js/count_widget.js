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
		obj.find('input').focus(function(){
			document.getElementById($(this).attr('id')).select();
			$(this).select();
			/*if ($(this).val() == 0) {
				$(this).val('');
			}*/
		}).blur(function(){
			if ($(this).val() == '') {
				$(this).val('0');
			}
		}).change(function(){
			var v  = $(this).val(); 
			if (!test(v)) {
				$(this).val(filter(v));
			}
		})
		add();
		sub();	
	}

	function add(){
		obj.find('.plus').click(function(){
			var input = $(this).parent('.count-widget').find('input');
			var count = input.val();
			if (!test(count)) {
				count = filter(count);
			};
			count++;
			input.val(count);
		});
	}

	function sub(){
		obj.find('.sub').click(function(){
			var input = $(this).parent('.count-widget').find('input');
			var count = input.val();
			if (!test(count)) {
				count = filter(count);
			};
			if (count > 0) {
				count--;
			};
			input.val(count);
		});	
	}

	//是否为数字
	function test(val){
		var reg = /^[0-9]+$/; 
		if (reg.test(val)){
			return true;
		} else {
			return false;
			//$(this).val(v.replace(/\D*/g, '');
		}
	}

	//过滤非数字
	function filter(val){
		return val.replace(/\D*/g, '');
	}

	return {
		init: init
	}
})()

