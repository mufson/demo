//set  类似数组  成员值唯一  add 增加数据  size 长度

var s = new Set();
[2,3,4,5,2,1,4,7,5,4].forEach(x=>s.add(x));

//console.log(...s);
//console.log(s.size);
//console.log(s);

//Set.prototype.size   Set.prototype.constructor 构造函数 默认是Set函数
// 操作   --add(value)  delete(vuale)  has(value) clear()
// 遍历  keys() values()  entries()  forEach()
//Array.from 可以将Set 结构转为数组

//去除重复函数
function dedupe(array) {
	return Array.from(new Set(array));
}

//console.log([...dedupe([1,1,2,4,5,2])]);

var d = new Set([{55:43},{s:41}]);

d.keys((x)=>console.log(x))
for(let x of d.keys()){
//	console.log(x);
}
var k = [1,7,5,8];

for(let x of k.keys()){
//	console.log(x);
}


s.forEach(x=>console.log(x*x));

s = new Set([...s].filter(x=>(x%2)==0));
console.log(s);
let one = new Set([1,2,3]);
let two = new Set([4,3,2]);
let union = new Set([...one,...two]);  //并集
let intersect = new Set([...one].filter(x=>two.has(x)));//交集
let difference = new Set([...one].filter(x=>!two.has(x)));//差集
console.log(union);
console.log(intersect);
console.log(difference);

//weakSet 对象集合 add  delete  has
var l = [[1, 2], [3, 4]];
var ws = new WeakSet(l);
console.log(ws)
//存储DOM节点

//Map 值对应值   Object  字符串对应值
//键值唯一  后面的值覆盖前面的值
//未定义键值返回undefind
//set(key,value)   get(key)  has(key)  delete(key)  claer()  
//keys() values()  entries()  foreach()
//遍历接口Symbol.iterator    map[Symbol.iterator] === map.entries
const m = new Map();
const o = {p:'Hello word!'};

m.set(o,'content');
const items = [
		['name','张三'],
		['title','Author']
	];
const map = new Map();

items.forEach(
	([key,value])=>map.set(key,value)
);

console.log(map);

function strMapToObj (strMap) {
	let obj = Object.create(null);
	for(let [k,v] of strMap){
		obj[k] = v;
	}
	return obj;
}
//对象JOSN  // '{"yes":true,"no":false}'         map.set() 
//数组JSON  // '[[true,7],[{"foo":3},["abc"]]]'  new Map()

//WeakMap
//只接受对象作为键名  没有遍历 size 无法情况
// get set has delete

	const wm1 = new WeakMap();
	








