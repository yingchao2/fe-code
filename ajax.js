var opts = {
    url: 'getInfo.php',
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
$.ajax(opts);
// url: 后端接口地址
// type: 数据传输方式，GET或者POST
// dataType: 预期服务器返回的数据类型。常用为json、jsonp
// data: 发给服后端的数据
// cache: 是否开启缓存，默认为true开启
// success: 成功后的回调函数，返还的数据做为参数
// error: 接口失败的回调函数
// complete: 请求完成的回调函数
// 
// 
// XHR创建对象
var xmlhttp;
if (window.XMLHttpRequest) {
    //code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else {
    //code for IE5, IE6
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

//当请求被发送到服务器时，我们需要执行一些基于响应的任务。每当 readyState 改变时，就会触发 onreadystatechange 事件。
xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
          //if success, do something
    }
}

//向服务器发送请求
xhr.open('get', 'default.html', false); //准备同步请求
xhr.send();
