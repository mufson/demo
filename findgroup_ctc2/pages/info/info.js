//index.js
//获取应用实例
var app = getApp();
var comServer = require('../../server/comServer.js');

Page({
  data: {

  },
  onLoad: function (options) {
   
  },
  onShareAppMessage: function () {
	 	var id  = 55;
		    return {
		      title: '信息',
		      path: '/pages/info/info?id=' + id
		    }
	}

})
