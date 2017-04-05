 
	
var i = 1;
var str;
var num ;
function foo () {
	setInterval(function(){
	
		num = 64 + i;
		str = String.fromCharCode(num);
		$(".info").text(str);
		i = i==26?1:++i;
 
	},1000);
}


var s = ["1524","d",{cd:"dfe"}];

for (let i of s) {
	//console.log(i);
}

let fonstr = 'return' + '`Hello ${name}`';
let fon = new Function('name',fonstr);

print(fon("mufson"));

 
var template = `
<ul>
  <% for(l i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
var parse = eval(compile(template));
var tempstr = parse({ supplies: [ "broom", "mop", "cleaner" ] });

print(tempstr);
 


var a = 5,b = 10;

function tag (s,v1,v2) {
	console.log(s[0]);
	console.log(s[1]);
	console.log(s[2]);
	console.log(v1);
	console.log(v2);
	
	return "OK";
}

 // tag`hello ${a+b} world ${a*b}`;

var tol = 50;
var msg = passtall`the tol is ${tol} (${tol*1.5}with tax)`;

function passtall(str){
	
	for(let i = 0; i<str.length;i++){
	//	print(str[i]);
	//	print(arguments[i+1]);
	}
	
	//print(str );
		print(arguments);
}
msg;

 let aa = {
 	'0':'da',
 	'1':'3',
 	length:2
 }
print(Array.from(aa));

	function abc () {
		print(arguments);
		print(Array.from(arguments));
	}


abc('a','2',54);

var t = 20;
var str = '我的文本啊';
print(Array.from({length:t},(n)=>n|| str + t));

print([1,2,3,4,5].copyWithin(0,2,5));

var s = [1,2,3,4,5].find(function(value,index,arr){
	print(value);
	print(`value = ${value} index = ${index} arr = ${arr}`);
	
})

let letter=  ['a','b','c'];
let entries = letter.entries();
print(entries.next().value);

 print([1,2,3,4,5].every(x=> x>0)); //全部项目满足
 print([1,2,3,4,5].some(x=> x>0)); //部分项目满足
 
 (function abc (x = '出去',y ='回来') {    //优化初始化
 
	print(`x=${x} y = ${y}`);
}('开心',false));      

let foo = 'outer';

function bar (func = x=>foo) {
	let foo = 'ab';
	print(func());
};
bar();


var x = 1;
function foo (x,y= function(){x = 4;}) {
	var x= 9;
	y();
	print(x);
}
foo();


function az () {
	throw new Error("必填");
}

function ka (mu = az()) {
	return mu;
};

 
print(ka(6));

function add (...val) {
	
	
	val.forEach(console.log);
}
add(1,2,5,8,45);

var val = [1,2,3];
var st = [4];
st.push(...val);
console.log(st);

var val = [1,2,3];
 
	//var max = Math.max.apply(null,val);
	var max = Math.max(...val);

print(max);


console.log(new (Date.bind.apply(Date, [null, 2015, 1, 1])));


var a= [1,5,4,85];
var b = [2,5,4];

console.log([...a,...b].sort());


var h = 'wodeshijie';

console.log([...h]);

var gg = function akl () {
	console.log("我的世界");
}

gg();

print(gg.name);

function foo () {
	setTimeout(()=>{
		console.log('id:',this.id);
	},100);
	
	setTimeout(function(){
		console.log('id:',this.id);
	},100);
}

var id = 21;
foo.call({id:42});
//foo.call();

 function insert(value) {
  return {into: function (array) {
    return {after: function (afterValue) {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    }};
  }};
}

var ff = insert(2).into([1, 3]).after(1); //[1, 2, 3]
print(ff);

let insert = (value) => ({into: (array) => ({after: (afterValue) => {
  array.splice(array.indexOf(afterValue) + 1, 0, value);
  return array;
}})});

var ff = insert(2).into([1, 3]).after(1); //[1, 2, 3]
print(ff);

const pipeline = (...funcs) =>
  val => funcs.reduce((a, b) => b(a), val);

const plus1 = a => a + 1;
const mult2 = a => a * 2;
const mult3 = a => a + 6;
const addThenMult = pipeline(plus1, mult2,mult3);

var ss = addThenMult(5);

print(ss);


const plus1 = a => a + 1;
const mult2 = a => a * 2;

mult2(plus1(5))
// 12
 
// λ演算的写法
fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))

// ES6的写法
var fix = f => (x => f(v => x(x)(v)))
               (x => f(v => x(x)(v)));


//尾调用的运用
 function sum(n) {
 	if(n === 1) return 1;
 	return n * sum(n-1);
 }

function sum2 (n,total) {
	if(n===1) return total;
	return sum2(n-1,n*total);
}
//print(sum(100));
print(sum2(100,1));

//斐波拉契数列
function fib ( n , c1 = 1 ,c2 = 1) {
	if(n <= 1 ) return c2;
	
	return fib(n-1,c2,c1+c2);
}

var k = fib(5);
 
	print(k);
	

function currying (fn,n) {
	
	return function(m){
		return fn.call(this,m,n);
	};
	
}

function tailFactorial (n,total) {
	if(n===1) return total;
	return tailFactorial(n-1,n*total);
}

const factorial = currying(tailFactorial,1);


print(factorial(5));

function abz (n,total =1) {
	if(n === 1)return total;
	return abz(n-1,n*total);
}

var hk = abz(5);

print(hk);

function sum (x,y) {
	if(y>0){
		return sum(x+1,y-1);
	}else{
		return x;
	}
}

//print(sum(1,100));

//蹦床函数
var i = 1;
function trampline (f) {
	console.log(i++);
	while(f && f instanceof Function){
		f = f();
	}
	return f;
}

function sum2(x,y){
	if (y>0) {
		return sum2.bind(null,x+1,y-1);
	}else{
		return x;
	}
}
var kx = trampline(sum2(1,10000));
print(kx);


方法名称简写
var o = {
	method(){
		return 'hello!';
	}
};


print(o.method());

var foo = 'bar';
var baz = {foo};

print(baz.foo);


function get () {
	var x = 1;
	var y = 10;
	
	return {x,y};
}

print(get());

var ms = {};

function getItem (key) {
	return key in ms ? ms[key] : null;
}

function setItem (key,value) {
	ms[key] = value;
}

function clear(){
	ms = {};
}

module.exports = {getItem,setItem,clear};

var obj = {};
obj.foo = true;

obj['a'+'bc'] = 123;

console.log(obj);


var s = +0 === -0;
var sn = NaN === NaN;

var so = Object.is(+0,-0);
var sno = Object.is(NaN,NaN);

print(`s = ${s}  sn = ${sn} so = ${so}  --- sno = ${sno} `);


var a = {a:125,dd:58};
var b = {c:89,dd:89};

Object.assign(a,b);
print(a);


var s = {a:89,b:67,c:56};
var ss = [44,88,22,9];

print(Object.keys(s));
print(Object.entries(s));
print(Object.values(s));

let s= Symbol('wdewifi');

print(s);

 
var obj = {};
var a = Symbol('a');
var b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

var objectSymbol = Object.getOwnPropertySymbols(obj);

console.log(obj);


var obj = new Proxy({},{
	get: function(target,key,receiver){
		 return 35;
		console.log(`getting ${key}`);
		return Reflect.get(target,key,receiver);
	},
	set: function(target,key,receiver){

		console.log(`setting ${key}`);
		return Reflect.set(target,key,receiver);
	}
})

obj.count = 11;
obj.count ++;

console.log(obj.count );

 

var handler = {
	get:function (target,name){
		if(name === 'prototype'){
			return Object.prototype;
		}
		
		return 'hello,' + name;
	},
	apply:function(target,thisBinding,args){
		return args[0];
	},
	construct:function(target,args){
		return {value:args[1]};
	}
};

var fproxy = new Proxy(function(x,y){
	return x+y;
},handler);


 print( fproxy(1,2));
 print( new fproxy(1,2));
 fproxy.prototype = Object.prototype;
 print( fproxy.foo);

var person = {
	name:'张三'
};
var proxy = new Proxy(person,{
	get:function (target,property) {
		if(property in target){
			return target[property];
		}else{
			throw new ReferenceError('Property\"' + property + "\" does not exist.");
		}
	}
})



 
 print( proxy.age);
 
var s = new Set(['red','green','blue']);

//print(s);

for (let item of s.keys()) {
	print(item);
}

for(let item of s.values()){
		print(item);
	
}
for(let item of s.entries()){
		print(item);
	
}
let set = new Set([1,2,3]);

set.forEach((key,value)=>console.log(value*2));

let set = new Set([1,2,3]);

[4,4,4,4,4,1,2,3,5,4].forEach((key,value)=>console.log(key*2));


let arr = [3,5,2,2,5,5];
let une = [...new Set(arr)];
print(une);

let a = new Set([1,2,3]);
let b = new Set([4,3,2]);

let union = new Set([...a,...b]);

let intersect = new Set([...a].filter(x=>b.has(x)));

let difference = new Set([...a].filter(x=>!b.has(x)));

print(union);
print(intersect);
print(difference);


var a = [[1,2],[3,4]];
var ws = new WeakSet(a);
print(ws);


 

var i = 0;

function tco (f) {
	var value;
	var active = false;
	var accumulated = [];
	
	return function acc () {
		
		accumulated.push(arguments);

		if(!active){
			active = true;
			while(accumulated.length){
 
				value = f.apply(this,accumulated.shift());
				
			}
			active = false;
			
			return value;
		}
	};
}

var sum = tco(function (x,y) {
	if(y>0){
		return sum(x+1,y-1);
	}else{
		return x;
	}
});

var t = sum(1,1000);
//print(t);


const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val );

const plus1 = a => a + 1;
const mult2 = a => a * 2;
const mult3 = a => a +10;
const addThenMult = pipeline(plus1, mult2,mult3);



 print( addThenMult(5));

const k = (a,b)=>a*b;
print(k(1,8));


var m = new Map();
var o = {p:'Hello,World'};
var b = 123;

m.set(o,'网页代码');
m.set(b,'开始');

print(m);
print('33');


 let map = new Map([
 	['F','no'],
 	['T','yes'],
 ]);

for (let key of map.keys()) {
	print(key);
 
};

for (let val of map.values()) {
	print(val);
};

for (let [key,val] of map.entries()) {
//	print(key,val);
	console.log(key, val);
};

for(let [key,val] of map.entries()){
	console.log(key,val);
}

for(let [key,val] of map){
	console.log(key,val);
}


 let map0 = new Map().set(1,'a').set(2,'b').set(3,'c');
 
 let map1 = new Map(
 	[...map0].filter(([k,v])=>k<3) 
 	
 );
 
 let map2 = new Map(
 	[...map0].map(([k,v])=>[k*2,'_' + v]) 
 	
 );
 
 print(map1);
 print(map2);
 
 
  let myMap = new Map().set(true,7).set({foo:3},['abz']);
 
 print([...myMap]);
 
 var ak = new Map([[true,7],[{foo:3},['aaa']]]);
 
 print(ak);
 
 function strMapTobj(strMap){
 	let obj = Object.create(null);
 	for (let [k,v] of strMap) {
 		obj[k] = v;
 	}
 	return obj;
 }
 
 let myMap2 = new Map().set('yes',true).set('no',false);
 var bk = strMapTobj(myMap2);
 print(bk);
 
 //iterator  for of
//iterator  支持数组
var s = ['z1','b2','k3','r4'];

 for (let item of s.keys()) {
// 	print(item);
 }

 
let st = new Set().add('a').add('b2').add('c3');

let a =  [x,y] = st;

//print(st);
var str = 'hello';
//console.log([...str]);
let arr = ['b','c'];

console.log('a',...arr,'ds');

 var bs = [...arr];
 
// print(bs);

let generator = function* () {
	yield 20;
	yield* [2,3,4];
	yield 5;
 
};
var az = generator();

print(az.next());
print(az.next());



var someString = 'hi';

var iter = typeof someString[Symbol.iterator];

print(iter);

var iterator = someString[Symbol.iterator]();


print(iterator.next());
print(iterator.next());

print(iterator);


var str = new String('hi');
console.log([...str]);

str[Symbol.iterator] = function(){
	return {
		next: function(){
			if(this._first){
				this._first = false;
				return{
					value:'bye',
					done:false
				};
			}else{
				return{
					done:true 
				};
			}
		},
		_first:true
	};
};

console.log([...str]);
console.log(str);


var mt = {};
mt[Symbol.iterator] = function *(){
	yield 1;
	yield 2;
	yield 3;
	yield 4;
};

console.log([...mt]);

let obj = {
	*[Symbol.iterator](){
		yield 'hello';
		yield 'world';
	}
};

for(let x of obj){
	print(x);
}


 
 var arr = ['a','b','c','d'];
 for(let a in arr){
 	console.log(a);
 }

var ee = new Set(['gecko','ht','xs','bh','zcs','811']);

for(let sk of ee){
	console.log(sk);
}

jQuery.prototype[Symbol.iterator] =
  Array.prototype[Symbol.iterator];
  
   
 var arr = ['a','b','c','d'];
 for(let a in arr){
 	console.log(a);
 }

var ee = new Set(['gecko','ht','xs','bh','zcs','811']);

for(let sk of ee){
	console.log(sk);
}

//Generator 函数   状态机
//调用Generator 返回一个遍历器对象 代表Generator函数内部指针  done 是否遍历结束 
//Symbol.iterator 方法  == 对象的遍历器生成函数


function* helloGenerator(){
	yield 'hello';
	yield 'world';
	return 'ending';
}

var hw = helloGenerator();

/*print(hw.next());
print(hw.next());
print(hw.next());
print(hw.next());
print(hw.next());*/


if(0){
	console.log('真真真');
}

function* f(){
	for (var i = 0; true; i++) {
		var reset = yield i;
		if(reset) {
			i = -1;
		}
	}
}

var g = f();

print(g.next());
print(g.next());
print(g.next(true));
print(g.next());
print(g.next());
print(g.next());


function* fibonacci(){
	let[prev,curr] = [0,1];
	for(;;){
		[prev,curr] = [curr,prev + curr];
		yield curr;
	}
}

for(let n of fibonacci()){
	if(n>10) break;
	console.log(n);
}


//异步编程  
//回调函数    事件监听  发布/订阅   promise对象

//回调函数
fs.readFile('/etc/passwd',function(err,data){
	if(err) throw err;
	console.log(data);
});



fs.readFile(fileA,function(err,data){
	fs.readFile(fileB,function(err,data){
		//...
	});
});

//Promise
var readFile = require('fs-readfile-promise');

readFile(fileA)
.then(function(data){
	console.log(data.String());
})
.then(function(data){
	return readFile(fileB);
})
.then(function(data){
	console.log(data.String());
})
.catch(function(err){
	console.log(err);
})



//Generator  协程 yield

function *asyncJob (x) {
	//代码
//	var f = yield readFile(fileA);
	yield x + 22;
	//代码
}

var b = asyncJob(3);

console.log(b.next());


function *gen (x) {
	try{
		var y = yield x + 2;
	}catch(e){
		//TODO handle the exception
		console.log(e);
	}
	
	return y;
}

var g = gen(1);
console.log(g.next());
g.throw('出错了');


var fetch = require('node-fetch');

function *gen () {
	var url = 'https://api.github.com/users/github';
	var result = yield fetch(url);
	console.log(result.bio);
}

var g = gen();
var result = g.next();

result.value.then(function (data) {
	return data.json();
}).then(function (data) {
	g.next(data);
})

//thunk 函数
//参数求职策略  
var x = 1;
function f (m) {
	return m*2;
}

f(x+5);
//传值调用 call by value  f(6)  传名调用   f(x+5)  用的时候求值
//JS 传值调用

//es5
var thunk = function (fn) {
	return function(){
		var args = Array.prototype.slice.call(arguments);
		return function(callback){
			args.push(callback);
			return fn.apply(this,args);
		}
	}
}

//es6
var thunk = function (fn) {
	return function (...args) {
		return function (callback) {
			return fn.call(this,...args,callback);
		}
	};
};


 
var arr= [1,2,3,4];

const [first,last] = arr;
console.log(last);

function ak({f,l}) {
	console.log(f,l);
}
var o = {};
o.f = 50;
o.l = 65;
ak(o);

let v1= '2',v2 = 2;
const a = {k1:v1,k2:v2};
const b = {
	k1:v1,
	k2:v2,
};


var ref = "some value";
const atom = {
	ref,
	value:1,
	addValue(value){
		return atom.value + value;
	},
};

console.log(atom.addValue(5));
 
const a = [undefined,undefined,undefined];
const b = [,,,];
console.log(0 in a);
console.log(1 in b);

var g = SIMD.Float32x4(1.0, 2.0, 3.0, 4.0);
var h = SIMD.Float32x4(5,6,7,9);
var c = SIMD.Float32x4.add(g,h);
Console.log(c);

//结构没看明白


var thunk = function (fn) {
	return function (...args) {
		return function (callback) {
			return fn.call(this,...args,callback);
		}
	};
};

function f (a,b) {
	b(a);
}

let ft = thunk(f);
let log = console.log.bind(console);

ft(1)(log);





















