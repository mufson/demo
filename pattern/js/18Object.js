$(function(){
	
	var getClass= Object.prototype.toString;
 	
 		Object = Number;
 	
 	var foo = new Object;
 	
// 	console.log([foo,getClass.call(foo)]);

	//undefined  Null  Boolean String Number Object
	
//	console.log(typeof undefined);
	
	
	 for(var k = 0;k<4;k++){
	 	
	 	var re = /ecma/g;
	 	
//	 	console.log(re.lastIndex);
//	 	console.log(re.test('ecmascript'));
	 	
	 }
	 
	 var b = new Number(1);
	 
	 b.x = 55;
	 
	 console.log(b);
	 var a = {};
	 
	 console.log(a.toString);
})
