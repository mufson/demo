//可读性 一致性 可预测性 
//最小全局变量
/*myglobal  = 'hello';
console.log(myglobal);
console.log(window.myglobal);
console.log(window['myglobal']);
console.log(this.myglobal);*/

//全局变量的问题
function sum(x,y) {
	result = x + y;
	return result;
}

function sum(x,y) {
	var result = x+y;
	return result;
}

function foo () {
	var a = b = 0;
	var c,d;
}

//预解析 var散布  hoisting 悬置/置顶解析/预解析

var ak = 90;
var ak;
//console.log(ak);

var i,myarray = [1,2,3,4];

for (var i = 0; i < myarray.length; i++) {
//	console.log(i);
}
//缓存数组/集合长度
for (var i = 0,max = myarray.length; i<max; i++) {
//	console.log(i);
}

for(i=myarray.length;i--;){
//	console.log(i);
}
 i = myarray.length;
while(i--){
//	console.log(i);
}
//for-in 非数组对象的遍历


var man = {
	hands:2,
	legs:2,
	heads:1,
};
//if(typeof man.prototype.clone == "undefined" ){
//	man.prototype.clone = function () {
//		
//	};
//}
//console.log(man.length);

for(var i in man){
//	console.log(i);
}

//过滤原型的属性  hasOwnProperty  

//扩展内置原型  Augmenting  Built-in Prototypes

/*if (typeof Object.prototype.myMethod !== "function") {
	Object.prototype.myMethod = function () {
		
	}
}
*/

var inspect_me = 0,
	result = '';
	
	switch(inspect_me){
		case 0:
		result = 'zero';
		break;
		case 1:
		result = 'one';
		break;
		case 2:
		result = 'two';
		break;
		default:
		result = 'default';

	}

console.log(result);

//隐式类型转换  ===   ==

//eval 执行字符串

var moth = "08",
	year = '09';
	
	console.log(parseInt(year));

//构造函数命名开头大写 MyCons()   不使用new调用的  小写命名  mySon()
//分隔单词 驼峰命名   构造函数 大驼峰命名  函数方法 小驼峰命名
//常量全部大写
//下划线前缀 私有变量属性
















