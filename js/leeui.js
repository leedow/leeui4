/**
 * leeui main js
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-05-16 14:04:37
 * @version $Id$
 */
var leeui = {};
leeui.widgets = {};

(function(factory){
	if (typeof define == 'function') {
		define(function(require, exports, module){
			require('zepto');
			console.log("init leeui");
			factory(Zepto);
		});
	} else {
		factory(Zepto);
	}
})(function($){
	leeui.init = function(){
		$(document).ready(function(){
			leeui.widgets.count.init();
			leeui.widgets.dialog.init();
			leeui.widgets.check.init();
			leeui.widgets.sidebar.init();
			leeui.widgets.tabs.init();
		});
	}
})

