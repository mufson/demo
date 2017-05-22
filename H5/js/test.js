$(function(){
	
	var pro = $('#progress');
	var x = 0;
 
	
	(function pross () {
		let val = pro.attr('value');
		console.log(x);
		x+=1;
		if (x>100) {
			return false;
		}
		pro.attr('value',x);
		setTimeout(function(){
			pross ();
		},100);
	}())
	 
})
