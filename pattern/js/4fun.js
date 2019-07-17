
  var elems = document.getElementsByName('a');
  
	for (var i = 0; i < elems.length; i++) {
		elems[i].addEventListener('click',(function(lockIndex){
			
			return function (e){
				e.preventDefault();
				console.log(lockIndex);
			}
		})(i),'false');
	}
	
	function a(i){
		if (i<=1) {
			return i;
		}else{
			return a(i-1)+ a(i-2);
		}
	}
  
var gg = a(8);

console.log(gg);
