var getConfig = require('configServer.js');

function check(obj) {

	var errtxt = '',
		len;
	var checkConfig = getConfig.getInfo('checkConfig');
	console.log(checkConfig);
	for (let i in obj) {
		if (checkConfig[i]) {
			len = trim(obj[i]).length;
			if (checkConfig[i].required && len == 0) {
				errtxt = checkConfig[i].required;
			} else if (checkConfig[i].minlength && len < checkConfig[i].minlength) {
				errtxt = checkConfig[i].minError;
			} else if (checkConfig[i].maxlength && len > checkConfig[i].maxlength) {
				errtxt = checkConfig[i].maxError;
			}
			if (errtxt) {
				return errtxt;
			}
		}
	}
	return errtxt;

}
function trim(s) {
	return trimRight(trimLeft(s));
}
function trimLeft(s) {
	if (s == null) {
		return "";
	}
	var whitespace = new String(" \t\n\r");
	var str = new String(s);
	if (whitespace.indexOf(str.charAt(0)) != -1) {
		var j = 0, i = str.length;
		while (j < i && whitespace.indexOf(str.charAt(j)) != -1) {
			j++;
		}
		str = str.substring(j, i);
	}
	return str;
}
function trimRight(s) {
	if (s == null) return "";
	var whitespace = new String(" \t\n\r");
	var str = new String(s);
	if (whitespace.indexOf(str.charAt(str.length - 1)) != -1) {
		var i = str.length - 1;
		while (i >= 0 && whitespace.indexOf(str.charAt(i)) != -1) {
			i--;
		}
		str = str.substring(0, i + 1);
	}
	return str;
}


module.exports = {
	check: check,
	trim:trim
	
}