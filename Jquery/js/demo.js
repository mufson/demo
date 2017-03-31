$(function(){
	
	var data = {};
	var str = '13703029528';
	var pos = 0;
	
	for(var i = 1; i<9;i++){
		  pos++;
		if(i == 4 || i == 5){
			data['num'+i] = '*';
			pos = i==5?8:pos;
		}else{
			
			data['num'+i] = str.substring(pos-1,pos);
		}
		document.getElementById('num'+i).innerHTML = data['num'+i];
	}
	
	console.log(data);
 	
})

 