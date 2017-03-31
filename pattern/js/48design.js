//对象创建模式
if (typeof Function.prototype.method !== "function") {
	Function.prototype.method = function (name,impementation) {
		this.prototype[name] = impementation;
		return this;
	};
}

var Person = function (name) {
	this.name = name;
}.method('getName',function () {
	return this.name;
}).method('setName',function (name) {
	this.name = name;
	return this;
});

var a = new Person('Adam');
//console.log(a.getName());
//console.log(a.setName("kale").getName());

var sp = (Math.random() + "_").slice(2);
//console.log(sp);


var constant  = (function () {
	var constants = {},
		ownProp = Object.prototype.hasOwnProperty,
		
		allowed = {
			string:1,
			number:1,
			boolean:1,
		},
		perfix = (Math.random() + '_'.slice(2));
		
		return {
			//设置名称为name的属性
			set: function (name,value) {
				if (this.isDefined(name)) {
					return false;
				}
				if (!ownProp.call(allowed,typeof value)) {
					return false;
				}
				constants[perfix + name] = value;
				return true;
			},
			//判断是否存在名称为name的属性
			isDefined:function (name) {
				return ownProp.call(constants,perfix + name);
			},
			//获取名称为name的属性
			get:function (name) {
				if (this.isDefined(name)) {
					return constants[perfix + name];
				}
				return null;
			}
		};
		
}());
//console.log(constant.isDefined('maxwidth'));
//console.log(constant.set('maxwidth',480));
//console.log(constant.isDefined('maxwidth'));
//console.log(constant.set('maxwidth',320));
//console.log(constant.get('maxwidth'));

/*var sownProp = Object.prototype.hasOwnProperty;
var kgs = {wi:88};
console.log('wi' in kgs);*/


//sandbox  沙盒模式

function Sandbox () {
	
	var args = Array.prototype.slice.call(arguments),
		callback = args.pop(),
		modules = (args[0] && typeof args[0]==='string') ? args : args[0],
		i;
		
		if (!(this instanceof Sandbox)) {
			return new Sandbox(modules,callback);
		}
		
		this.a = 1;
		this.b = 2;
		
		if (!modules || modules=='*') {
			modules = [];
			for (i in Sanbox.modules) {
				if (Sandbox.modules.hasOwnProperty(i)) {
					modules.push(i);
				}
			}
		}
		
		//初始化模块
		for (var i = 0; i < modules.length; i++) {
			Sandbox.modules[modules[i]](this);
		}
		
		callback(this);
}

Sandbox.prototype = {
	name:'My Application',
	version:'1.0',
	getName:function () {
		return this.name;
	}
};

Sandbox.modules = {};
Sandbox.modules.dom = function (box) {
	box.getElement = function () {
		
	};
	box.getStyle = function () {
		
	};
	box.foo = "bar";
}

Sandbox('dom',function (box) {
	//console.log(box.foo);
});  


/*function sv () {
	var args = Array.prototype.slice.call(arguments);
	console.log(args);
}

sv("1",2,435,"dfsg")
*/

//模式9静态成员
var Gadget = function () {
	
};
Gadget.isShiny = function () {
	return 'you bet';
};

Gadget.prototype.setPrice = function (price) {
	this.price = price;
}

//console.log(Gadget.isShiny());

var iphone = new Gadget();
iphone.setPrice(500);
//console.log( iphone);
Gadget.prototype.isShiny = Gadget.isShiny; 
//console.log( iphone.isShiny());
//console.log(typeof Gadget.setPrice);

var gg = (function () {
	
	var counter = 0;
	
	return function () {
		console.log(counter+=1);
	}
}());

/*var k1= new gg();
var k2= new gg();
var k3= new gg();*/



var hh = (function () {
	var counter= 0,
	 NewGadget;
	 
	 NewGadget = function () {
	 	counter +=1;
	 };
	 
	 NewGadget.prototype.getLastId = function () {
	 	return counter;
	 }
	
	return NewGadget;
	
}());

var ip1 = new hh();
var ip2 = new hh();
var ip3 = new hh();

 
console.log(ip1.getLastId());
 























