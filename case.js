/*创建对象的几种方式*/
// 工厂模式
function createPerson (name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function () {
		console.log(this.name);
	};

	return o;
}

var person = createPerson('Tomhu', 21, 'front-developer');

// 构造函数模式
function Person (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function () {
		console.log(this.name);
	};
}

var person = new Person('Tomhu', 21, 'front-developer');

// 原型模式
function Person() {}

Person.prototype.name = 'Tomhu';
Person.prototype.age = 21;
Person.prototype.job = 'front-developer';
Person.prototype.sayName = function () {
	console.log(this.name);
};

// 组合使用构造函数模式和原型模式
function Person (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
}

Person.prototype = {
	constructor: Person,
	sayName: function () {
		console.log(this.name);
	}
}

var person = new Person('Tomhu', 21, 'front-developer');

// 动态原型模式
function Person (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;

	if (typeof this.sayName != "function") {
		Person.prototype.sayName = function () {
			console.log(this.name);
		};
	}
}

var person = new Person('Tomhu', 21, 'front-developer');

/*对象的浅拷贝与深拷贝*/
// 浅拷贝
function shallowCopy(oldObject) {
	var newObject = {};
	for (var i in oldObject) {
		if(oldObject.hasOwnProperty(i)) {
			newObject[i] = oldObject[i];
		}
	}

	return newObject;
}

// 深拷贝
function deepCopy(oldObj) {
	var newObj = oldObj;
	if(oldObj && typeof oldObj === "object") {
		newObj = Object.prototype.toString.call(oldObj) === "[objetc Array]" ? [] : {};
		for (var i in oldObj) {
			newObj[i] = deepCopy(oldObj[i]);
		}
	}

	return newObj;
}

/*异常处理机制*/
// throw语句中断函数的执行。它应该抛出一个exception对象，该对象包含一个用来识别
// 异常类型的name属性和一个描述性的message属性。
var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }

    return a + b;
}

// 如果在try代码块内抛出了一个异常，控制权就会跳转到它的catch语句。
// 一个try语句只会有一个捕获所有异常的catch代码块
var try_it = function () {
    try {
        add('seven');
    } catch(e) {
        console.log(e.name + ': ' + e.message);
    }
}

try_it();

/*扩充类型的功能*/
Function.prototype.method = function (name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
	}

	return this;
};

// 自定义一个移除字符串首尾空白的方法。通过给基本类型增加方法，我们可以极大得提高语言的表现力。
String.method('trim', function() {
	return this.replace(/^\s+|\s+$/g, '"');
});