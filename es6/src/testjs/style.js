//编程风格
//块级别作用域 let  let 不存在变量提升
	
	if (1) {
		let x = 55;
	}
	
//	变量   const let var
// 静态字符串 使用单引号或者反引号   动态字符串使用反引号
const x = `45`;
 
// 解构赋值
 const[first,last] = [4,5];
// 行定义对象不以逗号结尾  多行定义最后一个以逗号结尾
 
 const a = {x:null};
 a.x = 456;
function getkey (val) {
	return 'bk';
} 
const b = {
	id:5,
	[getkey('3')]:true,
}
 
var ref=  'some value';

const cgh = {
	ref,
	value:1,
	
	addValue(val){
		return c.ref + val;
	},
};
 
 

(()=>{
	console.log("33");
	})();


function divide (a,b,{option=false}={}) {
	console.log(a,b,option);
}
function divide2 (a,b,option= false) {
	console.log(a,b,option);
}
// divide(1,2,{c:'ok',f:'gk',option:true});
  
  function hadis (opts={}) {
  	
  }
//class 取代 prototype
function queue (constents=[]) {
	this._queue = [...contents];
}
queue.prototype.pop = function () {
	const value = this._queue[0];
	this._queue.splice(0,1);
	return value;
}
class queue2{
	constructor(constents){
		this._queue = [...constents];
	}
	pop(){
		const value = this._queue[0];
		this._queue.splice(0,1);
		return value;
	}
}
 
















