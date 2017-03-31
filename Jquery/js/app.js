requirejs({
	baseUrl:"js",
	paths:{
		jquery:'jquery-1.7.2',
		foo:'app/shirt',
		page:'../test'
	},
	 shim: {
     
    }

  
	
});
requirejs(['jquery','foo','page'],function($,foo){
	
 	foo.setVal();
	
});