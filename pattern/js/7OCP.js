$(function () {
	
	//问题类型
	var answertype = {
		choice:0,
		input:1
	};
	//问题实体
	function question(label,answertype,choices){
		return{
			label:label,
			answertype:answertype,
			choices:choices
		};
	}
	
	var ts = [
		{a:5,name:555},
		{a:6,name:666},
		{a:7,name:777},
		{a:8,name:888},
		{a:9,name:999},
	];
	
	var s = $.grep( [], function(n,i){
		  return n > 0;
		})[0];
	var s2 = ts.filter(x=> x.a>7)[0];	
		console.log(s2);
 
	
	
	
	
	/******************************************************/
})