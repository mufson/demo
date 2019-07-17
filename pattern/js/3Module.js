var Calcu =  function(eq){
	
	var eqctl = 11;
	
	return{
		add:function (x,y) {
			return x+y;
		}
	}
	
} 

var cal =  Calcu(10);
console.log(cal.add(5,9));


//Module
var blogModule = (function () {
	var my = {}, priv = '博客园';
	
	function privatpic (data) {
		console.log(data);
	}
	
	my.name = 'ed';
	my.addPic = function (data) {
		privatpic(data);
	}
	return my;
}());

blogModule.addPic(333);

var blogModule2 = (function (my={}) {
	var oldadd= my.add; 
	my.add = function(){
		
		console.log("add");
	};
	return my;
	
} (blogModule2));

 
blogModule2.add();

var blogModule3 = (function (old) {
	var my ={},
	key;
	
	for (key in old) {
		if (old.hasOwnProperty(key)) {
			my[key] = old[key];
		}
	}
	
	var oldAdd = old.add;
	my.add = function(){
		console.log("add");
	}
	return my;
	
}(blogModule3||{}));
 