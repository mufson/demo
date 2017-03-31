 $(function(){
 	
 	function inherit (C,P) {
 		C.prototype = new P();
 	}
 	
  	function Person (name) {
  		this.name = name || 'Adam';
  	}
  	
  	Person.prototype.say = function () {
  		return this.name;
  	}
	
	function Child (name) {
		this.abz = '好多活';
		this.fas = function () {
			console.log("dffdfdff");
		}
	}
	
	inherit(Child,Person);
	
	var kid = new Child();
	console.log(kid.say());
	var kiddo = new Child();
	kiddo.name = "bane";
	console.log(kiddo.say());
	
	var s = new Child("adfa");
	console.log(s.fas());
	
	
 });
 		
		 