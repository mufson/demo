//方法设置默认值
function log (y='word') {
//	console.log(y);
}
//log(false);
 
 
var  x = 100;
function foo (p=x+1) {
//	console.log(p);
}
foo(20);

function foa ({x,y=5}) {
//	console.log(x,y);
}

foa({x:1,z:4});

fetch('http://sitstudent.jrzhuxue.com/Home/StuApp/home'/*,
	{
	 
		method:'get',
		headers: {
				"Content-Type": "application/json;charset=UTF-8",
				
			},
		
	}*/
	).then(
		res=>{
			return res.json()
		},res=>{
			
		}).then( data=>{
//			console.log(data)
		})
			

	function m1({y=5}={}) {
//		console.log(y);
		
	}
	function m2({y=5}) {
//		console.log(y);
		
	}
	m2(6);
//	有默认值的参数应该是函数的尾参数
// 函数的length 将返回没有指定默认值的参数个数
function b (x,y=5) {
	
}
//console.log(b.length);
//设置参数默认值.函数初始化时候参数区域会形成一个单独的作用域  context

var gs = 54;
(function aa(y=gs){
	var gs = 64;
//	console.log(y);
}())
 
//(function xf (gs= gs) {
//	
//}())
//参数区域初始化相当于  let gs = gs;  报错

 
var sz = 7;
(function (y,fun=()=>sz*sz) {
//		console.log(fun());	
}(4));

(function (y) {
//		console.log(y);	
}(4));

//rest 参数  rest参数 (...变量名)
function xa (x,...b) {
//	console.log(b);
}
 xa(12,3,2,8);
 xa(12,3,2,'gt');
 xa(12,{t:3},2,'gt');
 xa.call(this,2,{t:3},2,'gt')

var arr1 = [1,2,3];
var arr2 = [4,5,6];

arr1.push(...arr2);
//console.log(arr1);

//ES5 合并数组
var more = [3,6];
//console.log([1,5].concat(more));
//解构赋值
//[...'hello'] 字符串转数组
//.name 返回函数的名称  Function 构造函数返回的函数实例name为anonymous  bind 返回的函数名称前缀加bound
 
// 箭头函数
//this 指向定义时所在的对象。不是使用时的对象  arguments super new.target 都指向外层函数的对应变量
var add = (x,y)=>x+y;
var sum = (x,y)=>{this.z=5;console.log(this);;return x+y};
//console.log(sum());
//console.log(window.z);
class foodd{
	  
	
}
 
 // 管道机制 
const pipeline = (...funcs) =>
  val => funcs.reduce((a, b) => b(a), val);

const plus1 = a => a + 1;
const mult2 = a => a * 2;
const mult3 = a => a + 2;
const addThenMult = pipeline(plus1, mult2,mult3);
// console.log(addThenMult(5));

    

//console.log(addThenMult(5));
//并行 同一时刻多任务同时进行  
//并发 同一时间段内，多任务同时进行着，某一时刻，只有某一任务执行
//并发连接数,浏览器向服务器发起请求,建立TCP连接,每秒钟服务器建立的总连接数,服务器处10ms处理一个链接并发连接总数是100.
//同步任务执行完毕在执行异步任务

var lp = 9,bn;
for (var i = 0; i < 5; i++) {
	bn = i+10;
	setTimeout(function () {
		 
//		console.log(bn);
	})
}
console.log(i);
var start = + new Date();
var arr =[];

setTimeout(function () {
//	console.log("time:" + (new Date().getTime()-start));
},10)  

 //尾递归  最后一步只调用自身   
                   
function sumnum (x,total) {
	if(x==1) return total;
	return sumnum(x-1,total*x);
}
function fib (x) {
	if(x<2) return x;
	return fib(x-1) + fib(x-2);
}
// 0 1 1 2 3
function fib2 (n,ac1=1,ac2=1) {
	if(n<=1) return ac2;
	return fib2(n-1,ac2,ac2+ac1);
}
var suzval = sumnum(5,1);
var suzval2 = fib(7);
var suzval3 = fib2(2);
 console.log(suzval);
 console.log(suzval2);
 console.log('sum',suzval3);
  
 

























































































