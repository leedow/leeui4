/**
 * tabs widget
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-06-07 20:11:09
 * @version $Id$
 */
leeui.widgets.tabs = (function(){
	function init(){
		$('.tabs-layout').find('.tab-box').first().css('display', 'block');		
		$('.tabs').find('li').click(function(){
			$(this).parent('.tabs').find('li').removeClass('current');
			$(this).addClass('current');
			var r = $(this).attr('rel');
		 
			$(this).parents('.tabs-layout').find('.tab-box').css('display', 'none');
			$(this).parents('.tabs-layout').find('.tab-box-'+r).css('display', 'block');
			return false;
		});
	}

	return {
		init: init
	}
})()

