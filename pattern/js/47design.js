//47 对象创建模式上
//namespace 模式
var app = app || {};

app.modeuleA = app.modeuleA || {};

app.modeuleA.modeule = app.modeuleA.modeule || {};

app.modeuleA.modeule.MethodA = function () {
	console.log('print a');
}

app.modeuleA.modeule.MethodB = function () {
	console.log('print b');
}

/*app.modeuleA.modeule.MethodA();
app.modeuleA.modeule.MethodB();*/

var myapp = myapp || {};

myapp.namespace = function (ns_string) {
	
	var parts = ns_string.split('.'),
		parent = myapp,
		i;
		if(parts[0]==='myapp'){
			parts = parts.slice(1);
		}
	//	console.log(parts);
		
		for(i = 0; i<parts.length; i++){
			if(typeof parent[parts[i]] === 'undefined'){
				parent[parts[i]] = {};
			}
			parent = parent[parts[i]];
		}
		return parent;
}

myapp.namespace('ak.modules.module1');
myapp.namespace('vk.modules.module2');
myapp.namespace('dd.modules1.module2.module2');
// console.log(myapp);
 
  function name_space(ns_string) {
	
	var parts = ns_string.split('.'),
		parent = myapp,
		i;
		if(parts[0]==='myapp'){
			parts = parts.slice(1);
		}
	//	console.log(parts);
		
		for(i = 0; i<parts.length; i++){
			if(typeof parent[parts[i]] === 'undefined'){
				parent[parts[i]] = {};
			}
			parent = parent[parts[i]];
		}  
		return parent;
}
 
//Object.prototype.name_space = name_space;
var sk = {};
//sk.namespace('sk.ab.ck');
//console.log(sk);

var s = {};
var b = {};

function fa(s) {
	//这里有没有办法取得  s /  b 
}

 
var myFunction = function () {
	//依赖模块
	var event = YAHOO.util.Event,
		dom = YAHOO.util.dom;
};
 
function gadget () {
	var name = 'ipad';
	this.getName = function () {
		return name;
	}
}
//Revelation 模式
var myarray;

(function () {
    var astr = "[object Array]",
        toString = Object.prototype.toString;

    function isArray(a) {
        return toString.call(a) === astr;
    }

    function indexOf(haystack, needle) {
        var i = 0,
            max = haystack.length;
        for (; i < max; i += 1) {
            if (haystack[i] === needle) {
                return i;
            }
        }
        return -1;
    }

    //通过赋值的方式，将上面所有的细节都隐藏了
    myarray = {
        isArray: isArray,
        indexOf: indexOf,
        inArray: indexOf
    };
} ());


//console.log(myarray.isArray([1, 2])); // true

//链模式
var obj = {
	value:1,
	increment:function () {
		this.value += 1;
		return this;
	},
	add:function (v) {
		this.value += v;
		return this;
	},
	shout:function () {
		console.log(this.value);
	}
}

obj.increment().add(2).add(10).shout();
obj.add(6);
obj.shout();






























