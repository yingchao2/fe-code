//1.绑定每个span的click事件，让鼠标点击span时打印出对应的index
    var spans = $("#divTest span");
    $(document).ready(function() {
        for (var i = 0; i < spans.length; i++) {
            (function(num) {
                spans[i].onclick = function() {
                    console.log(num);
                }
            })(i);
        }
    });

//2.var a=["a","b","c","d"] 每过 1 秒 alert 一下数组中的值
	for(var j = 0; j < 4; j++) {
	    (function(i) {
	        setTimeout(function() {
	            alert(i);  
	        }, (i + 1) * 1000);
	    })(j);
	}

//3.绑定每个li的click事件，让鼠标点击li时打印出对应的index
	var aLi = document.getElementsByTagName('li');
	var add_the_handlers = function(nodes) {
	  var helper = function(i) {
	    return function(e) {
	      console.log(i);
	    };
	  };

	  var i;
	  for(i = 0; i < nodes.length; i++) {
	    nodes[i].onclick = helper(i);
	  }
	};

	add_the_handlers(aLi);
