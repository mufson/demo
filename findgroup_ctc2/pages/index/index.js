//index.js
//获取应用实例
var app = getApp();
var comServer = require('../../server/comServer.js');

Page({
	data: {
		
	},
	login:function(){
	 		return false;
			wx.login({
		      success: function(res) {
		        if (res.code) {
		        wx.getUserInfo({
		        		success: function (info) {
		        			console.log(info);
  				           wx.setStorageSync('info', info);
		        		},
		        		fail:function(info){
		        			console.log("获取用户数据失败");
		        			console.log(info);
		        		}
		        	})
		           console.log(res.code);
		           
		        } else {
		          console.log('获取用户登录态失败！' + res.errMsg)
		        }
		      },
		      fail:function(info){
		      console.log("调用登陆失败");
		       console.log(info);
		      }
		    });
	},
	onShow: function () {
 
	},
	cal:function(that){
		 
		 	console.log("cal");
			that.next();
		
	},
	onLoad: function (options) {
 
		var that = this;
		
		
		var asyn = new comServer.AsyncFunArr(comServer.print,this.cal,comServer.print,comServer.print);
		
		asyn.run();
		
		
		that.login();
		var i = 1;
		const retryLogin = setInterval(function(){
			if (wx.getStorageSync('info')) {
				clearInterval(retryLogin);
			}else{
				that.login();
			}
//			console.log("第"+ i++ +"分钟呼起登陆");
//		},6000000);
		},60000);
	 if (wx.setClipboardData) {
			wx.setClipboardData({
			  data: '我是AKL1452',
			  success: function(res) {
			    wx.getClipboardData({
			      success: function(res) {
			        console.log(res) // data
			      }
			    })
			  }
			})
	 	
	 }else{
	 	  wx.showModal({
		    title: '提示',
		    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
		  })
	 }
		
	},
	onShareAppMessage: function (data) {
		return {
			title: '群主页',
			path: '/pages/index/index'
		}
	},
})

// iphone4 382   480
// iphone5 470   568
// iphone6 569    667   51  252/2   391