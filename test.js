// 求数组中最大的数字
// 
Math.max.apply(null, arr);
/*apply的第一个参数是max所需要的this关键字，然而，这里并不需要改变this，所以给了一个null，
由于max方法的参数是一个一个传进来的，不能直接传数组，所以用apply的特点将数组传进去。*/


// 字符串反转
// 
str.split("").reverse().join("");
/*因为数组有反转的方法，所以可以先把字符串弄成数组。*/


// 数组去重
// 1.
Array.prototype.unique = function () {
    var tmp = [];  //一个新的临时数组

    for (var i = 0; i < this.length; i += 1) {  //遍历当前数组
    	// 如果当前数组的第i项已经保存进了临时数组，那么跳过
    	// 否则把当前项push到临时数组中
        if (tmp.indexOf(this[i]) == -1) {
            tmp.push(this[i]);
        }
    }
    return tmp;
}
// 2.
Array.prototype.unique = function () {
    var n = {}, r = [];  //n为hash表，r为临时数组
    for(var i = 0; i < arr.length; i++) {  //遍历当前数组
        if(!n[this[i]]) {  //如果hash表中没有当前项
            n[this[i]] = true;  //存入hash表
            r.push(this[i]);  //把当前数组的当前项push到临时数组里面
        }
    }
    return r;
}
// 3.
Array.prototype.unique = function () {
    var resultArr = [this[0]];  //结果数组

    for(var i = 1; i < this.length; i++) {  //从第二项开始遍历
    	// 如果当前数组的第i项在当前数组中第一次出现的位置不是i
    	// 那么表示第i项是重复的，忽略掉。否组存入结果数组
        if(this.indexOf(this[i]) == i) {
            resultArr.push(this[i]);
        }
    }

    return resultArr;
}


// 使用css画三角形
/*原理
首先将div宽高设置为0，通过后面的border硬挤出一个三角形
下边框100px，红色；左右边框50px，透明就可以挤出一个三角形
三角形的角指向哪边(比如上面)，他的相反边border-width是其他的二倍，颜色设置为不透明
 */
<style>
      width:0;
      height:0;
      border-bottom:100px solid red;
      border-right:50px solid transparent;
      border-left:50px solid transparent; 
</style>
<div id="trigon"></div>


// 递归函数计算Fibonacci数列。
// 一个Fibonacci数字是之前两个Fibonacci数字之和。最前面的两个数字是0和1.
var fibonacci = function (n) {
	return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

for (var i = 0; i < 10; i += 1) {
	console.log('// ' + i + ': ' + fibonacci(i));
}
/*fibonacci函数被调用了453次。我们调用了11次，而它自身调用了442次去计算可能已刚被计算过的值。*/
// 如果我们让该函数具备记忆功能，就可以显著地减少运算量。
// 
/*我们在一个名为memo的数组里保存我们的储存结果，存储结果可以隐藏在闭包中。
当函数被调用时，这个函数首先检查结果是否已存在，如果已经存在，就立即返回这个结果。*/
var fibonacci = function () {
	var memo = [0, 1];
	var fib = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fib(n - 1) + fib(n - 2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();
// 这个函数返回同样的结果，但它只被调用了29次。我们调用了它11次，它调用了自己18次去取得之前存储的结果。


// 模拟异步操作
// 1.虽然延时了0ms,但是执行顺序为：1，3，2
console.log(1); 
setTimeout(function(){
    console.log(2);
}, 0); 
console.log(3);
// 2.
function f1 (callback) {
  setTimeout(function () {
  	// 可能是个执行时间很长的任务
    for (var i = 0; i < 1000; i += 1) {
      console.log(i);
    }
    // 终于执行完了
    console.log('no hurry');
    callback();
  }, 0);
}

function f2() {
  console.log('do f2');
}

function f3() {
  console.log('do f3');
}

f1(f2);
f3();
// 执行顺序是先执行函数f3——>f1——>f2;



 
 

