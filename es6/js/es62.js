$(function() {

	//const 变量指向的内存地址是不变。 object.freeze  冻结数组
	//变量声明 var function let const import class
	// let const 不能重新声明
	//获取顶层对象
	// 方法一
	(typeof window !== 'undefined' ?
		window :
		(typeof process === 'object' &&
			typeof require === 'function' &&
			typeof global === 'object') ?
		global :
		this);

	// 方法二
	var getGlobal = function() {
		if(typeof self !== 'undefined') { return self; }
		if(typeof window !== 'undefined') { return window; }
		if(typeof global !== 'undefined') { return global; }
		throw new Error('unable to locate global object');
	};
	
	// 解构赋值
	//左边可以只匹配一部分右边
	// set 赋值
	let [x,y,z] = new Set(['a','b','c']);
	let [a,b,c] = [1,2,3];
	
//	console.log(a+b+c);
	
	function* fibs() {
		let a = 0;
		let b = 1;
		while (true){
			yield a;
			[a,b] = [b,a+b];
		}
	}
//	let [first,second,third,fourth,fifth,sixth] = fibs();
//	console.log(second);
	//惰性求值
//	let {foo,bar} = {foo:"aaa",bar:"bbb"};
//	console.log(foo);
	
	let obj = {first:'hello',last:'word'};
	let{first:f,last:l} = obj;
//	console.log(f);
	 
	var s = [1,2,3].forEach((x)=>x*x);
	var k  = [[1, 2], [3, 4]].map(([a, b]) => a + b);
//	console.log(k);
	  [(a)] = [1];
//	  console.log(a);
	  
	var w = "fjirel";
//	字符串 for of
	for(let d of w){
//		console.log(d);
	}
	// indexOf  
//	includes  布尔是否找到参数字符串
//	startsWith  布尔 是否找到字符参数 头部匹配
//	endsWith    布尔 世仇找到字符参数 尾部匹配 （参数，位置）  位置num 针对前num个字符
//repeat 返回新字符串 并将原来字符串重复n次
//padStart 头部补齐 (num,str)
//padEnd     尾部补齐

var r = w.repeat(8);
//console.log(r);
//模版字符串
//`dfaFHAF${name}`
//console.log(`我是w的值:${w}`);
// fun = 参数=>方法体
var re = ["22","33"];
var sa = re=>re.map(x=>x+x);
//console.log(sa(re));
let funa = 'return' + '`hello ${name}`';
let func = new Function('name',funa);
var bz = func('abc');
//console.log(bz);
let fund = aa=> 'hell' + aa;
//console.log(fund('kke'));
let str = '(name)=>`Hello ${name}`';
let funf = eval.call(null,str);
 
//console.log(funf('sk'));

var regex = new RegExp('xyz','i');
//console.log(regex);   

//console.log(re);
  re.forEach((x)=>x+x);
//console.log(re); 

//console.log(0.1+0.2);

//Math.trunc 去掉小数部分
//Math.sign    判断正负数 0 其他
//Math.cbrt    判断立方根
//Math.hypot   返回参数的平方和的平方根
//Math.expm1   对数
//Math.log1p   指数
//2**3  8 指数运算  


//console.log(Array.from(w,x=>x+1));
var bh = [1,2,5,8,20].findIndex((x)=>x>5);
//console.log(bh);
 var sum = [1,2,3,4,10].reduce((x,y)=>x+y);
// console.log(sum);
// fill 数组 填充  实例化数组
var fh = new Array(50).fill(7);
//console.log(fh);
//遍历数组  entries keys values
//for(let i on arr.keys)
//数组includes
 var val1 = [1,2,3,4,10].includes(4);
 var val2 = [1,2,3,4,10].some((x)=>x=4);
// console.log(val1);
// console.log(val2);
 var ab = [8,25,4,44];
var bv =  ab.map(function (value,index,array) {
//	console.log("  index:" + index + 'value:'+value  );
 
	return ++value;
});

//console.log( bv.join(','));
  for(let i of bv.entries()){
//	console.log(i);
  }
  
  var ss = [undefined,"3",,"77"];
//console.log(ss.slice());
//console.log([].slice.call(ss));
 
 function *hell0 () {
 	yield '456';
 	yield '456';
 	return 'ending';
 }
 var ht = hell0();
 console.log(ht.next());
 
function add1 (that) {
	console.log("add1");
	
	that.next();
}
function add2 (that) {
	console.log("add2");
	
	that.next();
}
function add3 (that) {
	console.log("add3");
	
	that.next();
}
function fn1 (that) {
	console.log("fn1");
	
	that.next();
}
 
function fn2 (that) {
 
	  setTimeout(() => {
	console.log(this + "fn2");
	that.add(fn5);
	that.next();
  }, 2000)
} 
function fn3 (that) {
	console.log('f3')
	var fz = new AsyncFunArr(add1,add2,add3,add1);
	fz.run();
	that.next();
}
function fn4 (that) {
	console.log('f4')
//	that.empty()
	that.next();
}
function fn5 (that) {
	var ss = 77;
	ss++;
	console.log('f5')
	console.log(ss);
	that.next();
}
 class AsyncFunArr{
 	constructor(...arr){
 		this.funcArr = [...arr]
 	}
 	next(){
 	 console.log(this)
 		 
 		const fn = this.funcArr.shift();
 	 	typeof fn == "function" && fn(this);
 	}
 	run(){
 		 
 		this.next();
 	}
 	add(fn){
 	 	typeof fn == this.funcArr.push(fn);
 	}
 	empty(){
 		this.funcArr=[];
 	}
 }
 const asyncFuncArr = new AsyncFunArr(fn1,fn2,fn3,fn5);
// asyncFuncArr.funcArr.push(fn4);
// console.log(asyncFuncArr);
// asyncFuncArr.funcArr= [];
// asyncFuncArr.funcArr.push(fn4);
// asyncFuncArr.funcArr.push(fn3);
// asyncFuncArr.funcArr.push(fn1);
 var ba = new AsyncFunArr(fn1,fn4,fn3,fn4,fn5);
 console.log(asyncFuncArr.funcArr);
 console.log(ba.funcArr);
// asyncFuncArr.run();
// ba.run();
 console.log("我是尾部");  
 
 var o = {
 	s:987,
 	method(){
 	console.log("45644545");
 		
 	}
 }
 class bad {
 	print(){
 		console.log("ds");
 	}
 }
console.log(o);



 	/*	***************************************/
})