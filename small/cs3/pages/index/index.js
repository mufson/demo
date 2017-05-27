//index.js
//获取应用实例
var app = getApp();
var comServer = require('../../server/comServer.js');

Page({
	data: {
	 start:false,
	 sum:25,
	 showDate:25,

	},	
	start:function(){
	 
	 		  
	 		var	start = this.data.start,
	 			that = this,
	 			sum = this.data.sum;
	 		 
	 		 if (start) {
	 		 	return false;
	 		 }  
	 		 this.setData({
	 		 	start:true
	 		 })
	 		var  st =  setInterval(function(){
	 			var showDate = that.data.showDate;
	 	 			console.log("执行");
	 				if (	showDate == 1) {
	 						showDate = sum;
	 						
	 						clearInterval(st);
	 						 that.setData({
					 		 	start:false,
					 		 	showDate:showDate
					 		 })
	 				}else{
	 					console.log(showDate);
	 						that.setData({
					 		 	showDate:showDate-1
					 		 })
	 				}
	 			},1000);

	 
	},
	onLoad: function ( ) {
		 
	}
})

 