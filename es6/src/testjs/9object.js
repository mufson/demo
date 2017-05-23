//对象的扩展
var foo = 'bar';
var baz = {foo};  //属性简写

console.log(baz);

var o = {
	method:function(){        //方法简写
		return 11;
	},
	method2(){
		
		return 22;
	}
}
console.log(o);

var ms= {};
function getItem(key){
	return key in ms?ms[key]:null;
}

function setItem (key,value) {
	ms[key] = value;
}


