/**
 * 数字滚动选择器
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-06-08 21:39:39
 * @version $Id$
 */
leeui.widgets.tapcount = (function(){
	var _counter,  _counterLi;// = $('.tapcounter').find('li');
	var _currentInput;

	function init(){
		console.log('init tapcount');
		initCounter();
		_counter = $('.tapcounter');
		_counterLi = $('.tapcounter').find('li');

		initScroll();

		$('.tapcount').prop("readOnly", true).on('click', function(){
			 
			_this = $(this);
			_currentInput = $(this);
			 
			showCounter(_this);
			return false;
		});

		$('body').on('click', function(){
			hideCounter();
		});

		choose();
	}

	//初始化选择器
	function initCounter(){
		var lis = "";
		
		for (var i = 0; i < 300; i++) {
			lis += '<li>' + i + '</li>';
		};

		var tmp = '<div class="tapcounter"><ul class="tap-wrapper">' + lis + '</ul></div>';
		$('body').append(tmp);
	}

	//初始化滚动
	function initScroll(){
		$('.tapcounter').css('display', 'block');//解决display为none的时候iscroll无法初始化
		var myScroll = new IScroll('.tapcounter', { scrollX: false, scrollY: true, mouseWheel: true  ,deceleration:0.00001,click: true });
		myScroll.on('scrollEnd', function(){
			var current = this.currentPage.pageY;

			_counterLi.each(function(index){
				//console.log(index + '' + current);
				if (index == current) {
					$(this).addClass('selected');
				} else {
					$(this).removeClass('selected');
				}
			});	
		});
		$('.tapcounter').css('display', 'none');
		document.getElementsByClassName('tapcounter')[0].addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	}

	//显示滑动选择数字容器
	function showCounter(obj) {

		var pos = obj.offset();

		_counter.css({
			'left': pos.left,
			'top': pos.top,
			'display': 'block'
		}).addClass('tapcounter-show');
		
	} 

	//选择数字
	function choose(){
		_counter.on('click', function(){
			return false;
		});
		_counterLi.on('click', function(){
			var c = $(this).attr('class')?$(this).attr('class'):"";
			//alert(c)
			if( c.indexOf('selected') >= 0){
				_currentInput.val($(this).text());
				hideCounter();
			}
		});
	}

	//隐藏
	function hideCounter(){
		_counter.removeClass('tapcounter-show').css('display', 'none');
		_counterLi.removeClass('selected');
	}

	return {
		init: init
	}
})()