/**
 * 侧栏
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-06-07 11:29:04
 * @version $Id$
 */
leeui.widgets.sidebar = (function(){
	
	function init(){
		$('.open-sidebar').on('click', function(){
			open();
			return false;
		});
		$('.close-sidebar').on('click', function(){
			close();
		});
		$('body').click(function(){
			var flag = $('.sidebar-layout').attr('class');
			if (flag.indexOf('side-open') > 0) {
				//console.log('close sidebar')
				close();
			};
			 		
		});
	}

	//弹出
	function open(){		
		$('.sidebar-layout')
		.removeClass('side-close')
		.addClass('side-open')
		//.find('.sidebar')
		//.removeClass('side-close')
		//.addClass('side-open');//.animate({'left':0});
		
		//$('.sidebar-layout').css({'display': 'block'});
	}

	function close(){
		$('.sidebar-layout')
		.removeClass('side-open')
		.addClass('side-close')
		//.find('.sidebar').removeClass('side-open').addClass('side-close');
		
		/*var timer = setTimeout(function(){
			$('.sidebar-layout').css('display', 'none');
		}, 300);*/
	}

	return {
		init: init
	}
})();

