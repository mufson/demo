
var getConfig = require('configServer.js');
var commom = require('commom.js');
var check = require('checkServer.js');

 

 
module.exports = {
	//公共服务	
	ajaxRequest: commom.ajaxRequest,
	upload_system: commom.upload_system,
	get_category: commom.get_category,
	wxlogin: commom.wxlogin, 
	wxgetUserInfo: commom.wxgetUserInfo, 
	getToken: commom.getToken,
	AsyncFunArr:commom.AsyncFunArr,
	joinGroup:commom.joinGroup,
	joinshow:commom.joinshow,
	getSystemInfoVal:commom.getSystemInfoVal,  
	closeShare:commom.closeShare,
	closeJoin:commom.closeJoin,
	closeJoinCopy:commom.closeJoinCopy,
	closeFillName:commom.closeFillName,
	status:commom.status,
	isNumber:commom.isNumber,
	adduser:commom.adduser,

	//配置服务
	getInfo: getConfig.getInfo,
	//校验服务
	check: check.check,
	trim: check.trim 
	
	
}