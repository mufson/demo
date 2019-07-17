$(function(){
	
	for (var k in {a:1,b:2}) {
//		console.log(k);
	}
	
//	console.log(k);
	
	function fgh(x,y,z) {
		arguments[0] = 50;
		arguments[2] = 40;
//		console.log(z);
	}
	
	fgh(2,10);
});
 
 
 
   var x = 55,y=0;
   
   function foo () {
   	
   	var x = 20;
   	var y = 30;
   	
   	var bar = new Function('console.log(x,y);');
   	
// 	bar();
   	
   }
   
   
	foo();
   
 function test(){
// 	console.log(this.a,this.b);
 }
	test.call({a:5,b:123});
 
var  ss=  {};
	ss.a = 10;
	
// 	console.log(Object.isExtensible(ss));  //   是否扩展对象
Object.preventExtensions(ss);          //禁止扩展
ss.b = 55;
ss.a= 60;
console.log(ss);

	Object.isSealed() //  是否密封
	Object.seal()// 密封
	Object.isFrozen()  // 是否冻结
	Object.freeze()//冻结
	

	var fer = {x:10};
	
	 
 	var c  = new Boolean(true);
 	c= Object(c);
// 	console.log(c);
 	
