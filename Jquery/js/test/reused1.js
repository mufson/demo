$(function () {
	
	function person (name) {
		this.name = name||'Admin';
	}
	
	person.prototype.say = function () {
		return this.name;
	}
	
	function child (name) {
		person.apply(this,arguments);
	}
	
	var kid = new child('kkk');
	
	console.log(kid.name);
	
	console.log(typeof kid.say);
	
	
	
	
	
	
	
	
});
