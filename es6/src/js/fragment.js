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