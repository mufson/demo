// Promise 一个异步操作  
//  状态 : 1 pending进行中   2  resolved已成功  3 rejected已失败   1--2    1--3









function fn1 () {
	console.log("fn1");
}
function fn2 () {
 
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("fn2");
			resolve()
		},1000)
	})
}
function fn3 () {
	console.log("fn3");
}

fn1();
fn2().then(()=>{
	fn3();
})