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
  console.log('oh no', error);
})
.then(function() {
  console.log('carry on');
})

//Promise.all() 将多个Promise实例包装成一个Promise

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

 
var spf = Promise.all(j1,j2).then(()=>console.log("ok"));