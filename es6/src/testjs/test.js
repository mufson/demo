var start = + new Date();
var arr =[];

var s = [];

for (var j = 0; j < 10000; j++) {
	 s.push(j);
	 for (var i = 0; i < s.length; i++) {
	 	s[i] = i*i;
	 }
}  

setTimeout(function () {
	console.log("time:" + (new Date().getTime()-start));
},10)  
 
// function gu() {
// 	
//	 	for (var i = 0; i < 1000000; i++) {
//	 		arr.push(i);       
//	 	}
// }   
//       
// gu();    
      
	 	for (var i = 0; i < 1000000; i++) {
	 		arr.push(i);       
	 	}     