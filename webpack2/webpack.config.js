var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//	context:,
//	entry:'./src/js/main.js',   //打包文件  string array object
//	entry:['./src/js/main.js','./src/js/a.js'],   //打包文件
	entry:{
		main:'./src/js/main.js',
		a:'./src/js/a.js'
	},
	output:{
		path:__dirname + '/dist',  //输出目录
//		filename:'bundle.js'          //输出文件名
		filename:'js/[name]-[hash].js'          //输出文件名
	},
	plugins:[
	new htmlWebpackPlugin({
		filename:'index-[hash].html',
		template:'index.html',
		inject:'head'                 //放置的标签位置
	})
	]
}
