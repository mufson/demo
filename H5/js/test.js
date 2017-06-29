$(function(){
	
	var pro = $('#progress');
	var x = 0;
 
	
	(function pross () {
		let val = pro.attr('value');
//		console.log(x);
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
var sizeof = function(str, charset){  
    var total = 0,  
        charCode,  
        i,  
        len;  
    charset = charset ? charset.toLowerCase() : '';  
    if(charset === 'utf-16' || charset === 'utf16'){  
        for(i = 0, len = str.length; i < len; i++){  
            charCode = str.charCodeAt(i);  
            if(charCode <= 0xffff){  
                total += 2;  
            }else{  
                total += 4;  
            }  
        }  
    }else{  
        for(i = 0, len = str.length; i < len; i++){  
            charCode = str.charCodeAt(i);  
            if(charCode <= 0x007f) {  
                total += 1;  
            }else if(charCode <= 0x07ff){  
                total += 2;  
            }else if(charCode <= 0xffff){  
                total += 3;  
            }else{  
                total += 4;  
            }  
        }  
    }  
    return total;  
}  
function trim(str) {
	
return str.replace(/(^\s*)|(\s*$)/g, "");   
}
console.log(trim('  鱼。，是.s  ').length);