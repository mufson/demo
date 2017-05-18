// Promise 一个异步操作  
//  状态 : 1 pending进行中   2  resolved (Fulfilled)已成功  3 rejected已失败   1--2    1--3


function fn1 () {
	console.log("fn1");
}
function fn2 () {
 
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
//			console.log("fn2");
			resolve()
		},1000)
	})
}
function fn3 () {
//	console.log("fn3");
}

fn1();
fn2().then(()=>{
	fn3();
})

var promise = new Promise(function (resolve,reject) {
	if (1) {
		resolve(55);
	}else{
		reject()
	}
})
promise.then((bb)=>{
//	console.log(bb);
})

function timeout(ms) {
	return new Promise((resolve,reject)=>{
		setTimeout(resolve,ms,'done');
	})
}
timeout(100).then((value)=>{
//	console.log(value);
})

var stk = 475;
setTimeout(function (val) {
//	console.log(val);
},1000,stk);

//当前同步脚本执行完后,才执行resolve
//console.log("axc",stk);
//Promise.prototype.then(fn1,fn2) fn1  resolve  回调  fn2是reject回调
//Promise.prototype.catch() 捕获前面运行过程中产生的错误
/*promise.then(function (data) {
	//成功
}).catch(function () {
	//错误
})*/
var some = function () {
	return new Promise(function (resolve,reject) {
		resolve(x+2);
	})
}

//some().then((x)=>console.log(x)).catch(function (y) {
//	console.log(y);
//});

//some().then((x)=>console.log(x)).catch((y)=>console.log(y));

var s = [1,5,6];

var k = s.map((x)=>x>5?x:x+1);
//console.log("",k);
//unhandledRejection  监听未捕获的reject错误

var someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing()
.catch(function(error) {
//console.log('oh no', error);
})
.then(function() {
//console.log('carry on');
})

//Promise.all() 将多个Promise实例包装成一个Promise  全部成功  =>成功

var j1 =  new Promise(function(x){
		setTimeout(function () {
			console.log("a1");
			x()
		},6000)
	})
 
var j2 =   new Promise(function(x){
		setTimeout(function () {
			console.log("b1");
			x()
		},4000)
	})

var m1 = function () {
	return new Promise(function(){
		setTimeout(function () {
			console.log("m1");

		},6000)
	})
}

 
var m2 = function () {
	return new Promise(function(){
		setTimeout(function () {
			console.log("m2");

		},4000)
	})
}
 
//var spf = Promise.all([j1,j2]).then(()=>console.log("ok"));
//var ks = Promise.all([m1,m2]).then(()=>console.log("mhjok"));

var promises = [2,3,5,7,11,13].map(function (id) {
//	return console.log(id);
})
Promise.all(promises).then(function () {
//	console.log("all");
})
//Promise.race 
//var p = Promise.race([p1,p2,p3]); 只要有一个状态改变p的状态就改变
//Promise.resolve 将现有对象转为Promise对象
Promise.resolve('foo');
new Promise(resolve => resolve('foo'));

let thenable = {
	then:function(resolve,reject){
		resolve(42);
	}
}

//let p1=Promise.resolve(thenable);
let p1= new Promise(resolve=>resolve(thenable));
p1.then(function (value) {
//	console.log(value);
})
Promise.prototype.done = function (onFulfilled,onrejected) {
	this.then(onFulfilled,onrejected)
	.catch(function (reson) {
	setTimeout(()=>{throw rsson},0);
	});
};
Promise.prototype.finally = function(callback){
	let p = this.constructor;
	return this.then(
		value => p.resolve(callback()).then(()=>value),
		reson => p.resolve(callback()).then(()=>{throw reson})
	)
}
//立即resolve 是在本轮事件循环结束时
var p = Promise.reject('出错了');
//var p = new Promise((resolve,reject)=>rejeft('出错了'))
p.then(null,function (s) {
//	console.log(s);
}).finally(function () {
//	console.log("akb");
})

const f = ()=>console.log("new");
//Promise.resolve().then(f);
//console.log("next");

const df = ()=>console.log("now");
(async ()=>df())()
.then().catch();
console.log("next");

const cf = ()=>console.log("cf");
(
	()=>new Promise(
		resolve=>resolve(cf())
	)
)();
console.log("nextcf");

//const gf = ()=>console.log("gfnow");
//Promise.try(gf);
//console.log('nextgf')

