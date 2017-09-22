var mySingleton = function() {
	var a = 'some private';
	
	function showPrivate(){
		console.log("showPrivate");
	}
	return {
		pubMethod:function(){
			showPrivate();
		},
		pubvar:'the public can see this'
	}
	
}

var sing = mySingleton();

sing.pubMethod()
console.log(sing.pubMethod());


var b  = (function () {
	
	var kk;
	
	function init () {
		return{
			pubmth:function () {
				console.log("123");
			},
			pubrty:"test"
		};
	}
	
	return{
		getInstace:function () {
			if (!kk) {
				kk = init();
			}
			return kk;
		}
	}
	
})();
b.getInstace().pubmth()


 var gkds=  function () {
 	var current = null;
 	
 	function init() {
 		console.log("init");
 	}
 	
 	function change () {
 		console.log("change");
 	}
 	return {
 		init:init,
 		set:change
 	};
 }
 
 var bg = {
 	a:0
 };
 var tgs = 55;
 
 Object.defineProperty(bg,"b",{
 	get:function () {
 		return tgs+1;
 	},
 	set:function(val){
 		this.a = val/2;
 	}
 })
bg.a = 99;
tgs = 96;
console.log(bg.b);