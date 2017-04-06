var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//	context:,
//	entry:'./src/js/main.js',   //打包文件  string array object
//	entry:['./src/js/main.js','./src/js/a.js'],   //打包文件
	entry:{
		main:'./src/js/main.js',
		a:'./src/js/a.js',
		b:'./src/js/b.js',
		c:'./src/js/c.js'
	},
	output:{
		path:__dirname + '/dist',  //输出目录
//		filename:'bundle.js'          //输出文件名
		filename:'js/[name]-[hash].js',          //输出文件名
		publicPath:'http://cdn.com/'
	},
	plugins:[
	new htmlWebpackPlugin({
		filename:'one.html',
//		filename:'index-[hash].html',
		template:'index.html',
//		inject:'head',                 //放置的标签位置
//		inject:false,                 //放置的标签位置
 		inject:false,                 //放置的标签位置
		title:'123',
		bax:'aade',
		minify:{
			removeComments:true,        //去掉注释
//			collapseWhitespace:true     //去掉空格
		},
		chunks:['main','a','b']
		
	}),
	new htmlWebpackPlugin({
		filename:'two.html',
//		filename:'index-[hash].html',
		template:'index.html',
 		inject:false,                 //放置的标签位置
		title:'哈哈',
//		chunks:['a']
		excludeChunks:['a']
 
		
	})
	
	]
}
