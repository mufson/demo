function parent(name) {
	this.fname = name;
	this.age = 40;

	this.say = function() {
		console.log(this.age);
	}
}

function child(cname) {
	this.parent = parent;
	this.parent(cname);
	//	delete this.parent;

	this.saysome = function() {
		console.log(this.fname);
		this.say();
	}
}
var ss = new child("无");

//ss.saysome();
//console.log(ss);

function p2(name){
	this.name = name;
	this.age = 40;
	this.say = function(){
		console.log(this.age);
	}
}
 function c2(name){
 	this.saything = function () {
 		console.log(this.name);
 	}
 	this.getName = function(){
 		return name;
 	}
 }
 function cc(name){
 	this.saything = function () {
 		console.log(this.name);
 	}
 	this.getName = function(){
 		return name;
 	}
 }
 
 var s2 = new c2("长");
 p2.call(s2,s2.getName());
  //s2.saything();
 //console.log(s2);
 
 cc.prototype = new p2();
 var sl = new cc("zkd");
// console.log(sl);
sl.saything();
 //继承
 //1.父类的构造函数成为子类的方法。子类调用方法。通过this 关键字实现属性和方法赋值
 //2.使用call 和 apply 改变上下文执行环境实现继承  无法继承原型链
