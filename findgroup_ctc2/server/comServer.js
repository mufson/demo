var getAddress = require('../config/cmb-data-url.js');
var getConfig = require('configServer.js');
var app = getApp();
function ajaxRequest(formData, fn, err, comp) {
	var token = wx.getStorageSync('token') || '';
	formData.method = formData.method || "post";
	formData.url = getAddress.getUrl(formData.id);
	formData.data = formData.data || {};
	formData.data.client = 'wechat';
	formData.data.token = token;
	formData.data.networktype = wx.getStorageSync('networktype') || "unkonw";
	 
	 for(let i in formData.data){
	 	 formData.data[i] = formData.data[i]=='undefined'?'':formData.data[i];
	 }
	wx.request({
		url: formData.url, //仅为示例，并非真实的接口地址
		method: formData.method,
		data: formData.data,
		header: {
			'content-type': 'application/json',
			Jrt: token
		},
		success: function (data) {

			console.log('http log:');
			console.log(data);
			if (data.statusCode == 200) {
				typeof fn == "function" && fn(data);
			} else {
				wx.showModal({
					title: '提示',
					content: '服务器错误!',
					showCancel: false,
					success: function (res) { }
				})
			}


		},
		fail: function (data) {
			typeof err == "function" && err(data);
		},
		complete: function (data) {

			typeof comp == "function" && comp(data);
		}
	})
};




function upload_system() {

	var token = wx.getStorageSync('token');
	if (token) {
		wx.getLocation({
			type: 'wgs84',
			success: function (res) {
				wx.setStorageSync('location_latitude', res.latitude);
				wx.setStorageSync('location_longitude', res.longitude);
				var phone = wx.getSystemInfoSync();
				ajaxRequest({
					id: 'update_location',
					method: 'post',
					data: {
						token: token,
						model: phone.model,
						pixelratio: phone.pixelRatio,
						windowwidth: phone.windowWidth,
						windowheight: phone.windowHeight,
						language: phone.language,
						version: phone.version,
						platform: phone.platform,
						latitude: res.latitude,
						longitude: res.longitude,

					}
				}, function (update_locationData) {
					console.log("上传设备信息以及GPS");
					console.log(update_locationData.data);
				});
			}
		})
	}
}


function get_category() {
	var category_list = wx.getStorageSync('category_list');
	console.log(category_list);
	if (!category_list) {
		ajaxRequest({
			id: 'get_category',
			method: 'post',
			data: {}
		}, function (category) {
			console.log("获取分类");
			if (category.data.status == 1) {
				console.log("缓存了分类数据" + category.data.data);
				wx.setStorageSync('category_list', category.data.data);
			}
			else { console.log("获取分类失败"); }
		});

	} else { console.log('本地已经有群分类缓存 无需请求服务器') }

}
function check(obj) {

	var errtxt = '',
		len;
	var checkConfig = getConfig.getCheckConfig();
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



function print2 (that) {
	console.log("增加的方法");
	that.next();
}
function print (that) {
	console.log("print");
	that.addhead(print2);
	that.next();
}
function wxlogin (that) {
     wx.login({
      success: function(res) {
        if (res.code) {
           //拿到code码
           that.addhead(wxgetUserInfo);
           that.next();
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      },
      fail:function(res){
      	//呼起登陆失败
      	that.next();
      }  
    });
	
}
function wxgetUserInfo (that) {
	wx.getUserInfo({
		  success: function(res) {
		  	//拿到用户信息
			that.next();
	
		  },
		    fail:function(res){
		      	//呼起登陆失败
		      	that.next();
		      }
		})
}


 class AsyncFunArr{
 	constructor(...arr){
 		this.funcArr = [...arr]
 	}
 	next(){		 
 		const fn = this.funcArr.shift();
 	 	typeof fn == "function" && fn(this);
 	}
 	run(){
 		 
 		this.next();
 	}
 	addEnd(fn){
 	 	typeof fn == this.funcArr.push(fn);
 	}
 	addhead(fn){
 	 	typeof fn == this.funcArr.unshift(fn);
 	}
 	empty(){
 		this.funcArr=[];
 	}
 }
module.exports = {
	ajaxRequest: ajaxRequest,
	get_category: get_category,
	upload_system: upload_system,
	AsyncFunArr:AsyncFunArr,
	print:print,
	getConfig: getConfig,
	check: check

}