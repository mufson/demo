
//函数表达式和函数声明
//函数声明
//function 函数名称(参数:可选){函数体}
//函数表达式  不声明名称   作为赋值表达式   NEW
//function 函数名称(可选)(参数:可选){函数体}

//函数声明会在任何表达式被解析和求值之前被解析和求值

fn();
console.log(s);

var s = 50;

console.log(s);

function fn () {
	console.log("命名函数");
}

 if (true) {  
	 function foo() {  
	 	return 'first';
	 }
 } else { 
	 function foo() { 
	 	return 'second';  
	 }
 }  
//console.log(foo());

	 function fk() {  
	 	return 'first';
	 }
	 function fk() {  
	 	return 'ko';
	 }

  console.log(fk());


//函数声明不受条件代码库约束

 var f = function g(){
 	console.log(typeof g);
 	console.log("188888888");
 }
	f();
     
  function makeCount() {
  	var i=0;
  	
  	return function () {
  		console.log(++i);
   	};
  	
  }
 
 
  var a1 = makeCount();
  
  a1();
  a1();
  
  var a2 = makeCount();
 
  a2();
  a2();

var g = function(x){console.log(x);}(2);


	!function(){
		console.log("49999999999");
	}()
















