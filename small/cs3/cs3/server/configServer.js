var config = {};

 
config.checkConfig = {
	"wxName":{
		required:"请输入个人微信号",
		minlength:2,
		minError:"微信号请至少输入2位字符",
		maxlength:16,
		maxError:"微信号最多为16位字符",
	},
	"brief":{
		required:"请输入个人简介",
		minlength:1,
		minError:"个人简介请至少输入1位字符",
		maxlength:140,
		maxError:"个人简介最多为140位字符",
	},
	"groupName":{
		required:"请输入圈子名",
		minlength:2,
		minError:"圈子名请至少输入2位字符",
		maxlength:16,
		maxError:"圈子名最多为16位字符",
	},
	"introduce":{
		required:"请输入圈子简介",
		minlength:5,
		minError:"圈子简介请至少输入5位字符",
		maxlength:512,
		maxError:"圈子简介最多为512位字符",
	},
	"groupLabel":{
		required:"请至少选择一个圈子标签",
	}
	
}
 
 
	config.category_list = [
		{"id":0,"key":"0","name":"全部"},
		{"id":1,"key":"e13fc3899ebbd52a84c08596a3135fa4","name":"行业人脉"},
		{"id":2,"key":"e55c4ca55979bfd7653abf7551050180","name":"本地生活"},
		{"id":3,"key":"fe9682b5f5e5a5cde297931c35839ca2","name":"兴趣爱好"},
		{"id":4,"key":"e0bed59176604643065c10f3e2a34081","name":"活动交友"},

	];
	wx.setStorageSync('category_list', config.category_list);
	
 config.statusCode={
 	303:'系统维护',
 	401:'身份验证失败',
 	404:'服务器错误',
 	505:'服务器错误', 
 	other:'服务器错误'
 }
  config.publicNumber = 'luoyu41';
  config.publicimg = '../../image/logo.png';
  config.tagnum = 3;
	//  ==========
	//  = 读取配置的数据名称 =   codeNum  返回验证码错误次数
	//  ==========
	function getInfo (str) {
	
		 return config[str] || '';
	}

// 		 selectNum = category.map(x=>(x.tag.filter(y=>y.isSelect==true).length)).reduce((x,y)=>x+y);
// var num = config.tagClass.map(x=>(x.tag.filter(y=>y.isSelect==true).map(z=>z.id)));
// var sum = JSON.stringify(config.tagClass).split('"isSelect":true').length-1;
 
 
 

module.exports = {
	getInfo: getInfo 
}
