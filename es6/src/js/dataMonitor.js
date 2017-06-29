const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
const newArrProto = [];

[
'push',
'pop',
'shift',
'unshift',
'splice',
'sort',
'reverse'
].forEach(method=>{
	let original = arrayMethods[method];
	
	newArrProto[method] = function mutator () {
		console.log(method,arguments,"数据变化");
		return original.apply(this,arguments);
	}
})

let list = [1,2];
list.__proto__ = newArrProto;
list.push(3);
let list2 = [1,2];
list2.push(3);
 
 
