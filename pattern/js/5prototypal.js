	var baseCal = function () {
		this.decima = 2;
	}
	
	baseCal.prototype = {
		
		add:function(x,y){
			return x+y;
		},
		subtract:function(x,y){
			return x-y;
		}
	}
	
	var Calcu = function(){
		
		this.tax = 5;
	}
 	
//	Calcu.prototype = new baseCal();
	Calcu.prototype = baseCal.prototype;
	
	Calcu.prototype.add = function (x,y) {
		return x+y+10;
	}
var cl = new Calcu();

/*console.log(cl.add(1,5));
console.log(cl.decima);
console.log(cl.tax);*/

 function Foo(){
 	this.value = 42;
 }

Foo.prototype = {
	method:function(){}
};

function Bar(){}

Bar.prototype = new Foo();
Bar.prototype.foo = "Hello W";
  Bar.prototype.constructor=Bar;
var test = new Bar();
var test2 = new Bar();
test.value = 99;
 
 


 console.log("222");

 

