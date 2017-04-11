

var ss = {
	a:12,
	b:13,
	c:14,
	d:15
}
for(let i in ss){
//	console.log(i);
}

var str = Object.keys(ss);
var str2 = Object.getOwnPropertyNames(ss);

// Object.keys(ss).forEach((x)=>console.log(ss[x]));

  class AsyncFunArr2{
 	constructor(...arr){
 		this.funcArr = [...arr]
 	}
 	next(){		 
 		const fn = this.funcArr.shift();
 	 	typeof fn == "function" && fn(this);
 	}
 	run(){
 		 
 		this.next();
 	}
 	addEnd(fn){
 	 	typeof fn == this.funcArr.push(fn);
 	}
 	addhead(fn){
 	 	typeof fn == this.funcArr.unshift(fn);
 	}
 	empty(){
 		this.funcArr=[];
 	}
 }
  
function AsyncFunArr () {
	this.funcArr = [];
 
	for(var i in arguments){
		this.funcArr.push(arguments[i]);
	}
}

AsyncFunArr.prototype = {
	
	next(){		 
 		var fn = this.funcArr.shift();
 	 	typeof fn == "function" && fn(this);
 	},
 	run(){
 		 
 		this.next();
 	},
 	addEnd(fn){
 	 	typeof fn == this.funcArr.push(fn);
 	},
 	addhead(fn){
 	 	typeof fn == this.funcArr.unshift(fn);
 	},
 	empty(){
 		this.funcArr=[];
 	}
}
function pri1 (that) {
	console.log("111");
	that && that.next();
}
function pri2 (that) {
	console.log(that.info);
	that && that.next();

	
}
var ss = new AsyncFunArr(function(that) {
	that.info = 55;
	that.next();
},pri2,pri1,pri2,pri1);
 
ss.run();
 
function ac () {
	console.log("ac");
}
 

console.log(function acd () {
	console.log("ac")
});
console.log(ac);