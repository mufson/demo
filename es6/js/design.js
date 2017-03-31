//47 对象创建
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

myapp.namespace('myapp.modules.module1');
myapp.namespace('myapp.modules.module2');
myapp.namespace('myapp.modules1.module2.module2');
 console.log(myapp);































