$(function () {
	
	function parent (name) {
		
		this.name = name || 'Adam';
		
	}
	
	parent.prototype.say = function () {
		return this.name;
	}
	
	function child (name) {
		
	}
	
	function inherit (C,P) {
		C.prototype = P.prototype;
	}
	inherit(child,parent);
	
	var kid = new child('patrick');
	console.log(kid.name);
	
});
