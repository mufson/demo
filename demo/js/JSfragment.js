//  ========== 
//  = 异步执行 = 
//  ========== 
function fn1 () {
	console.log("fn1");
	asyncFuncArr.next();
}
 
function fn2 () {
 
	  setTimeout(() => {
	console.log("fn2");
	asyncFuncArr.next();
  }, 2000)
}
 
function fn3 () {
	console.log('f3')
	asyncFuncArr.next();
}
 class AsyncFunArr{
 	constructor(...arr){
 		this.funcArr = [...arr]
 	}
 	next(){
 		 
 		const fn = this.funcArr.shift();
 	 	typeof fn == "function" && fn();
 	}
 	run(){
 		 
 		this.next();
 	}
 }
 
 const asyncFuncArr = new AsyncFunArr(fn1,fn2,fn3);

 //asyncFuncArr.run();
///////////////2222222222222222222/////////////
function fn1 () {
	console.log("fn1");
}
 function fn2 () {
 	return new Promise((resolve,reject)=>{
 		setTimeout(()=>{
 			console.log("fn2");
 			resolve();
 		},500)
 	})
 }
 function fn3 () {
 	console.log("fn3");
 }
 fn1();
 fn2().then(()=>{fn3()});
 
 ///////////////////////333333333////////////
 function fn1 () {
	console.log("fn1");
}
 function fn2 () {
 	setTimeout(()=>{
 		console.log("fn2");
 		af.next();
 	},1000)
 }
 function fn3() {
 	console.log("fn3");
 }
 
 function* asycFunArr2 (...fn) {
 	fn[0]()
 	yield fn[1]()
 	fn[2]()
 }
const af = asycFunArr2(fn1,fn2,fn3);
af.next();
 
 /////////////////4444444444444////////////
 function fn1 () {
	console.log("fn1");
}
function fn2 () {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("fn2");
			resolve();
		},1000)
	})
}

function fn3 () {
	console.log("fn3");
}
async function saynFunrr3 () {
	fn1()
	await fn2()
	fn3()
}
 saynFunrr3()
 
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
 
 //顺序执行方法队列
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
	that.next();
}
function fn4 (that) {
	console.log('f4')
	that.empty()
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
 asyncFuncArr.run();
 ba.run();
 
/*************************************************/