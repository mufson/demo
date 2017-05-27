var getAddress = require('../config/cmb-data-url.js');
var getConfig = require('configServer.js');
var validate = require('checkServer.js');
 
function ajaxRequest(formData, fn, err, comp) {
 
	var token = wx.getStorageSync('token') || '',
		url;
	 
	formData.method = formData.method || "post";
		url = getAddress.getUrl(formData.id);
	formData.url =formData.url || url;
	formData.data = formData.data || {};
	formData.data.client = 'WEAPP';
	formData.data.token = token;
	//formData.data.networktype = wx.getStorageSync('networktype') || "unkonw";
	 for(let i in formData.data){
	 	 formData.data[i] = formData.data[i]=='undefined'?'':formData.data[i];
	 }
	 console.log(formData);
	wx.request({
		url: formData.url, //仅为示例，并非真实的接口地址
		method: formData.method,
		data: formData.data,
		header: {
			'content-type': 'application/json',
			Jrt: token
		},
		success: function (res) {
			
			let { statusCode, errMsg, data } = res;
			var statustxt = getConfig.getInfo('statusCode'),
				errtxt;
			if (statusCode == 200) {
				if(data.status==1){
					typeof fn == "function" && fn(data.data);
					
				}else{
					 
					if (typeof err == "function") {
						err(data.data)
					}else{
						wx.showModal({
							title: '提示',
							content: data.message,
							showCancel: false,
							success: function(res) {
								if(res.confirm) {
									//				   console.log('用户点击确定')
								}
							}
						})
					}
				}
				typeof comp == "function" && comp(data);
				
			} else if (statusCode == 401) {
				
					typeof err == "function" && err(data);	  	
					
			}else{
				if(statusCode in statustxt){
					errtxt = statustxt[statusCode];
				}else{
					errtxt = statustxt['other'];
				}
				wx.showModal({
					title: '提示',
					content: errtxt,
					showCancel: false,
					success: function (res) { 
				      if (res.confirm) {

						    }						
					}
				})
			}


		},
		fail: function (data) {
			
			console.log("发起ajax失败");
		},
		complete: function (data) {
				
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
	if (1 || !category_list) {
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

	} else { console.log('本地已经有圈子分类缓存 无需请求服务器') }

}

function wxlogin (that) {
	var loginStatus = status('login');
	console.log("调用了登陆校验");

 	if (loginStatus) {
 		ajaxRequest({id:'heartbeat'},function(data){
 			wx.setStorageSync('userinfo', data.userinfo);
 			 that.next();
 		},function(){
 			login (that);
 		})
 		
 	}else{
 		
		login(that);
	} 	
}
function login (that) {
		wx.login({
	      success: function(res) {
	        if (res.code) {
	           //拿到code码]
	           that.userInfo = {};
	           that.userInfo.code = res['code'];
	           that.addhead(wxgetUserInfo);
	           that.next();
	        } else {
	      	  wx.setStorageSync('token', '');
	          console.log('获取用户登录态失败！' + res.errMsg)
	        }
	      },
	      fail:function(res){
	      	//呼起登陆失败
	      	console.log("wxlogin呼起登陆失败");
	      	wx.setStorageSync('token', '');
	      	that.next();
	      }  
	    });
}
function wxgetUserInfo (that) {
	 
 
	wx.getUserInfo({
		  success: function(res) {
		  	//拿到用户信息
      		console.log("拿到用户信息");		  	
		  	that.userInfo.info = res;
           	that.addhead(getToken);
		  	 wx.setStorageSync('userInfo', res.userInfo);
			that.next();
	
		  },
		    fail:function(res){
		      	//呼起登陆失败
      			console.log("wxgetUserInfo呼起登陆失败");
      			wx.setStorageSync('token', '');
		      	that.next();
		      }
		})
}
function getToken (that) {
	
		var signature = that.userInfo.info['signature'],
			 encryptedData = that.userInfo.info['encryptedData'], //注意是encryptedData不是encryptData...坑啊
			 iv = that.userInfo.info['iv'],
			 code = that.userInfo.code,
			 login = {},
			 temp;
			 
		login.id = 'authentication';
		login.method = 'post';
		login.data = {
			"code": code,
//			"signature": signature,
			'iv': iv,
			'userinfo': encryptedData
		};
		ajaxRequest(login, function (data) {
		 
					that.isChange = true;
					wx.setStorageSync('token', data.token);
					wx.setStorageSync('userinfo', data.userinfo);
					console.log("登陆成功");
					console.log(data.token);
		      		that.next();
			 
		},function(data){
			console.log(data);
			wx.setStorageSync('token', '');
			console.log("向后台登陆失败");
		});
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
 
 
 function joinGroup () {
 
 	var isShare = status('wxname'),
 		fillName = this.data.fillName,
 		fillwxName = this.data.fillwxName,
 		userinfo,
 		errtxt;
 		
 	  errtxt = validate.check({wxName:fillwxName});


 	//如果存在微信名
 	if(isShare ){
 		
 		joinshow (this); 
 		
 	}else if(fillName){   //如果开启的弹窗
 		
 		errtxt = validate.check({wxName:fillwxName});
 		//如果通过校验
 		if(errtxt){
			 	wx.showModal({
				 title: '提示',
				 content: errtxt,
				 showCancel:false,
				 success: function(res) {
				  if (res.confirm) {
		//				   console.log('用户点击确定')
				  }
				 }
				}) 
		}else{
			//缓存数据
			userinfo = wx.getStorageSync('userinfo');
			userinfo = userinfo==''?{}:userinfo;
			userinfo.wechat = fillwxName;
			wx.setStorageSync('userinfo', userinfo);		
			//if 登陆就向后台更新数据
			if(status('login')){
				ajaxRequest({id:'updatewechat',data:{wechat:userinfo.wechat}},function (data) {
					console.log("新用户保存用户名");
				});				
			}
			this.fillupdate();
			//新用户填写了名字向后台发请求更新数据
			 joinshow (this); 
		}
 	}else{   //没有名字并且没有处于先清空弹窗的值在开启弹窗
 		this.setData({
			initwxName:'',
			fillwxName:'',
			fillName:true
		})
 	}
 }
 function joinshow (thas) {
 	var that;
 	that = this;
	if (thas.data) {
		that = thas;
		//是加入的圈子的推送加入
		//后台发请求  推送加入的信息和站内信息 无法测试。。接口字段不齐全  
		// that.data.groupgid that.data.formId 
		console.log("发模版消息");
		if(status('login')){
			var userinfo = wx.getStorageSync('userinfo');
			console.log("发加入站内消息");
			 ajaxRequest({id:'join_group',data:{gid:that.data.groupgid,guest_wechat:userinfo.wechat}},function(data){
			 	console.log(data);
		  
			 })
			 ajaxRequest({id:'sendWechatMessage',data:{gid:that.data.formId}},function(data){
			 	console.log(data);
	/*		 	wx.showModal({
					 title: '提示',
					 content: data,
					 showCancel:false,
					 success: function(res) {
					  if (res.confirm) {
			 
					  }
					 }
					}) */
			  
			 })
		 }
	}
 		 
 	let wxNum = that.data.wxNum +'';
 	that.setData({
 		fillName:false
 	})
 	var ss = wx.getSystemInfoSync();
 	console.log(ss);
 	 		console.log("是否可以复制内容");
 			console.log(wx.setClipboardData);	
 		if (wx.setClipboardData ) {
		 	
				wx.setClipboardData({
				  data: wxNum,
				  success: function(res) {
				    wx.getClipboardData({
				      success: function(res) {
				        that.setData({
				        	join:true
				        })
				      }
				    })
				  },
				  fail:function () {
			  			that.setData({

				        	joinCopy:true
				        })
				  }
				  
				})
		 	
		 }else{
		 	//显示自己手动复制页面
 			
			that.setData({
	        	joinCopy:true
	        })
		 }
		 console.log('成功显示加入，向后台推送信息');
		 console.log(that);
		 

 }
 
 function getSystemInfoVal (val) {
	    
		 var res = wx.getSystemInfoSync();
		 
		  if(val && res[val]){
		   		return res[val];
		   }else{
		   	return res;
		   }
	}
// 关闭分享界面
 function closeShare () {
 	this.setData({
 		sharePrompt:false
 	})
 }
// 关闭加入界面
 function closeJoin () {
 	this.setData({
 		join:false
 	})
 }
// 关闭手动复制加入界面
 function closeJoinCopy () {
 	this.setData({
 		joinCopy:false
 	})
 }
// 关闭填写微信名字界面
 function closeFillName () {
 	this.setData({
 		fillName:false
 	})
 }

 //  ========== 
 //  = 获取状态 = 
//输入参数: string  login  userinfo wxname
//返回值:  无
 //  ========== 
 function status(str){
 	var token,
 		userinfo;
 		
 	if (str=='login') {
	 	token = wx.getStorageSync('token');
	 	if(token.length>0){
	 		return true;
	 	}
	 	return false;
 		
 	}else if(str=='userinfo'){
	 	userinfo = wx.getStorageSync('userinfo');
 		if(userinfo.wechat && userinfo.resume ){
 			return userinfo.uid;
 		}
 		return false;
 	}else if(str=='wxname'){
	 	userinfo = wx.getStorageSync('userinfo');
 		if(userinfo.wechat){
 			return true;
 		}
 		return false;
 	}
 	return false;
 }
 //判断字符串是否是数字
 function isNumber(str) {
 	
 	　　return Math.floor(str) === str
 }
 function adduser (str) {
  	 	if (isNumber(str)) {
  	 		if (str==99) {
  	 			return '99+';
  	 		}else{
  	 			return ++str;
  	 		}
  	 	}
  	 	return str;
 }
 
 //  ========== 
 //  = 获取用户信息 = 
 //  ========== 
 
 function SergetUsinfo() {
 
 }
 
module.exports = {
	ajaxRequest: ajaxRequest, 
	upload_system: upload_system, 
	get_category: get_category, 
	wxlogin: wxlogin, 
	wxgetUserInfo: wxgetUserInfo, 
	getToken: getToken,
	AsyncFunArr: AsyncFunArr,
	joinGroup:joinGroup,
	joinshow:joinshow,
	getSystemInfoVal:getSystemInfoVal,
	closeShare:closeShare,
	closeJoin:closeJoin,
	closeJoinCopy:closeJoinCopy,
	closeFillName:closeFillName,
	status:status,
	isNumber:isNumber,
	adduser:adduser
	

}