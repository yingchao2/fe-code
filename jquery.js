	//Dom ready的三种方式
	//
	
	1.$(document).ready(function() {
	   //your code here
	});
	2.$().ready(function() {
	   //your code here
	});
	3.$(function() {
	   //your code here
	});
	//
	//dom元素和jquery元素如何转换
	//
	1.dom——>jquery  
	var target = document.getElementById('target');
	$target = $(target);
	
	2.jquery——>dom
	jquery元素是以数组元素展现，选取数组的第几项就能转换为dom元素。
	var $p1 = $('.p1');
	var p1 = $p1[0];
	//
	//
	jquery事件：bind/live/delegate/on(live方法被废弃，常用on方法)
	//
	//jquery特性方法
	//1.隐藏显示
	   ~$(selector).hide(speed,callback);
	   ~$(selector).show(speed,callback);
	   ~$(selector).toggle(speed,callback);
	//    
	//2.淡入淡出
	   ~$(selector).fadeIn(speed, callback);
	   ~$(selector).fadeOut(speed,callback);  //淡出
       ~$(selector).fadeToggle(speed,callback); //淡入淡出切换
       ~$(selector).fadeTo(speed,opacity,callback);  //渐变到透明度
    //    
    //3.滑入滑出
       ~$(selector).slideDown(speed,callback);  //滑入
       ~$(selector).slideUp(speed,callback);  //滑出
       ~$(selector).slideToggle(speed,callback);  //切换
    //    
    //4.动画
       ~$(selector).animate({params},speed,callback);
       必需的 params 参数定义形成动画的 CSS 属性。
	   可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
	   可选的 callback 参数是动画完成后所执行的函数名称
	//    
	//    
	//jQuery dom操作
	text() 设置或返回所选元素的文本内容
	html() 设置或返回所选元素的内容（包括 HTML 标记）
	val() 设置或返回表单字段的值
	attr() 设置或返回元素的属性
	// 
	// 
	//jQuery 添加、删除元素
	   ~append() - 在被选元素的结尾插入内容
	   ~prepend() - 在被选元素的开头插入内容
	   ~after() - 在被选元素之后插入内容
	   ~before() - 在被选元素之前插入内容
	//    
	//    删除元素
	   remove()  删除被选元素(及其元素)
	   empty()   从备选元素删除子元素
	//  
	//添加与删除class
	  ~hasClass(class)   判断元素是否拥有某个class
	  ~removeClass(class)   删除元素的某个class
	  ~addClass(class)   为某个元素添加class
	  ~toggleClass(class)   切换移除样式class
	

	// jQuery Css设置或返回被选元素的一个或多个样式属性。
	  返回指定的css属性
	     $('p').css("background-color")
	  设置css属性
	     $('p').css("background-color", "yellow")
	  设置多个css属性
	     $('p').css({
	     	"background-color": "yellow",
	     	"font-size": "200%"
	     });
	//      
	//      
	// jquery 尺寸
	width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。
	height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。
	innerWidth() 方法返回元素的宽度（包括内边距）。
	innerHeight() 方法返回元素的高度（包括内边距）。
	outerWidth() 方法返回元素的宽度（包括内边距和边框）。
	outerHeight() 方法返回元素的高度（包括内边距和边框）
	outerWidth(true) 方法返回元素的宽度（包括内边距、边框和外边距）。
	outerHeight(true) 方法返回元素的高度（包括内边距、边框和外边距）。
	// 
	// 
	// 
	// jquery 常用的遍历函数
	.children()  获取元素的子元素
	.each()  遍历选择器元素
	.find()  查找子元素
	.parent() .parents
	parent()查找父亲， parents(selector)从祖先里查找
	prevAll()获取自己前面的邻居
	siblings()获取自己的邻居
	// 
	// 
	// Ajax 函数
	// ajax() 方法通过 HTTP 请求加载远程数据。
	// 
	// $.ajax(opts);
	opts为ajax所需的参数，为json格式
	// 
	// 常用参数有：
	url: 后端接口地址
	type: 数据传输方式，GET或者POST
	dataType: 预期服务器返回的数据类型。常用为json、jsonp
	data: 发给服后端的数据
	cache: 是否开启缓存，默认为true开启
	success: 成功后的回调函数，返还的数据做为参数
	error: 接口失败的回调函数
	complete: 请求完成的回调函数
	// 
	/*	var opts = {
	        url: 'getMoreItem.php',
	        type: 'GET',
	        dataType: 'json',
	        data: {
	            name: 'xiaoming'
	        },
	        success: function(data){
	            console.log(data.items);
	        },
	        error: function(){
	            alert('error');
	        }
	    };
	    $.ajax(opts);*/

	// 防止重复提交(对于表单，可在用户初次提交后把按钮设置为disabled，当数据响应后再去掉disabled属性。
	// 对于ajax请求，可设置标记变量flag，初始时设置flag为true.在用户点击提交按钮后，判断flag是否为true，如果是则发送ajax请求，并把flag设置为false。 等服务端给出响应后再把flag设置为true;)
	// 
    var ready = true;
    $('.add-more').on('click', function(){
        ...
        if(!ready){
            return;
        }
        ready = false;
        $.ajax({
            ...
            complete: function(){
                ready = true;
            }
        });
    });