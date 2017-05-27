//对象的扩展
var foo = 'bar';
var baz = {foo};  //属性简写

console.log(baz);

var o = {
	method:function(){        //方法简写
		return 11;
	},
	method2(){
		
		return 22;
	}
}
console.log(o);

var ms= {};
function getItem(key){
	return key in ms?ms[key]:null;
}

function setItem (key,value) {
	ms[key] = value;
}

// 比较函数
var j = Object.is(5,5);
console.log(j);
//对象合并  字符串会以数组方式拷贝，会把字符串转为数组。其他类型不在首参数不报错  浅拷贝
var target = {a:1,b:2};
var source1 = {b:2,c:4};
Object.assign(target,source1);
Object.assign(target,"source1");
//console.log(target);

let obj = {foo:123};
Object.getOwnPropertyDescriptor(obj,'foo');

//遍历对象
//for...in  对象自身和继承的可枚举属性
//Object.keys(obj) 对象自身（不含继承）的所有可枚举对象
//Object.getOwnPropertyNames(obj) 对象自身的所有属性..包括不可枚举 不含Symbol
//Object.getOwnPropertySymbols(obj)
//Reflect.ownKeys(obj)    返回所有对象
console.log(Object.keys(obj));    
console.log(Object.getOwnPropertyNames(obj)); 


































