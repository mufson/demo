$(function(){
	
	$("input").keyup(function () {
 
		var v1 = parseFloat($('.val1').val()) ;
		var v2 = parseFloat($('.val2').val()) ;
		var v3 = parseFloat($('.val3').val()) ;
		var sum = (v1*v2/v3).toFixed(2);
 
		$('.sum').html( sum);   
 
	})
	
	
})
