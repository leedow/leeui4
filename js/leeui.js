/**
 * leeui main js
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-05-16 14:04:37
 * @version $Id$
 */
var leeui = {};
leeui.widgets = {};


leeui.init = function(){
	$(document).ready(function(){
		leeui.widgets.count.init();
		leeui.widgets.dialog.init();
	});

}

