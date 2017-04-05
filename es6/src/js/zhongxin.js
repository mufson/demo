var date1=new Date();
var date2=new Date('2016-11-19 09:19');
var date3=(date2.getTime()-date1.getTime())/1000;   //相差秒数 
    date3 = date3 - 5;
    date3 = date3*1000;
    

function second(day,hour,brach)//天/小时/ 分  
{
   hour = day * 24 + hour;
   brach = hour * 60 + brach;
   var second = brach  * 60;

   
    return second; 
     
}
 
 var date = new Date();
 var i = 0,time,submitID;
setTimeout(function(){
	time =  setInterval(function () {
		i++;
		if (i>200) {
			clearInterval(time);
		}
 		if( document.getElementById("orderForm")){
 
 			 document.getElementById("orderForm").submit();
 
 		}
	
		try{
		  if(typeof(eval('go_back'))=="function")  {
		  	clearInterval(time);
		 	 go_back();
		 	 
			 }
		}catch(e){
		//TODO handle the exception
		}
    
	
	},50);
},1);




  var i = 0,time,submitID;
 
	time =  setInterval(function () {
		i++;
		if (i>50) {
			clearInterval(time);
		}
 		  document.getElementById("orderForm").submit();
 
	},10);











