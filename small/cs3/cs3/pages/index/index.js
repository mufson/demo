//index.js
//获取应用实例
var app = getApp();
var comServer = require('../../server/comServer.js');

Page({
	data: {
	 start:true

	},	
	start:function(){
		var start = this.data.start;
		this.setData({
			start:!start
		})
	},
	onLoad: function ( ) {
		 
	}
})

 