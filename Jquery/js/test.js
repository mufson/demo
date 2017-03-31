$(function(){
	
	var i =( function (){
		
	//	alert("ff");
		 
	}());
	
	
	 
	
	function lottery(){
		
		var num = 0;		
		var time ;
		var method = 'start';
		var times = {};
		
		
		function start(){
			$(".caption").text('停止');
			
			times.num1 = new scroll('num1');
			times.num2 = new scroll('num2');
			times.num3 = new scroll('num3');
			times.num4 = new scroll('num4');
			times.num5 = new scroll('num5');
		}
		
		function suspend(){
			$(".caption").text('开始');
			 
			 for(var i in times){
			  	$('.' + i).text(mask(times[i].num));
			 	clearInterval(times[i].time); //停止计时器 
			 }
			
		}
		
		function scroll(obj){
			
			var num; 
			var _this = this;
			this.time = setInterval(function() {
					
					//console.log(num++);
				 	num = '1' +  Math.ceil(Math.random()*10000000000);
				 	setNum();
					$('.' + obj).text(num);
					 
				}, 20);
				
			function setNum(){
				_this.num = num;
			}
		}
		function mask(val){
			val = val||'1380000000';
			var len = val.length;
			
			if(len<11){
				for(var i= 0;i<11-len;i++){
					val = val + "0";
				}
			}
			var str = val.substr(0,3)+"****"+val.substring(7);
			return str;
		}
		return {
			method:function(){
				console.log(arguments);
				
				var fn = eval(method);
					fn();
				method = method == 'start'?'suspend':'start';
			}
		}
	}
	 
	var kk = new lottery();
 
	$(".caption").click(function(){
		kk.method();
	})
 
 	
})
