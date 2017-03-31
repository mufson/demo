$(function() {

	   $("#left_typeUl_t41341 li").click(function () {
  	 	if(!$('#left_typeLi_t400_2').hasClass('left_menu1_cur')){
  	 		$('#left_typeLi_t400_1').addClass('left_menu1_cur');
  	 		$('#left_typeLi_t400_2').removeClass('left_menu1_cur');
  	 		
  	 	}
	  	 $(this).addClass("left_menu1_cur").siblings().removeClass("left_menu1_cur"); 
	  	
	    })

	 
	
});