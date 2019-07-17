$(function(){
	
	
 
		class Error{
		constructor(m){
			this.m = m;
			this.name= 'Error';
			this.name=  this.constructor.name;
		//	this.stack = <nested calls>;
		}
	}
		
	class RError extends Error{
		
		constructor(m,c){
			super(m);
			this.cause = c;
			 
		}
	}
	
})
