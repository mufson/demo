var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//	context:,
//	entry:'./src/js/main.js',   //打包文件  string array object
//	entry:['./src/js/main.js','./src/js/a.js'],   //打包文件
	entry:{'./src/app.js'},
	output:{
		path:__dirname + '/dist',  //输出目录
//		filename:'bundle.js'          //输出文件名
		filename:'js/[name].bundle.js',          //输出文件名
		publicPath:'http://cdn.com/'
	},
	module:{
		{
			test:/\.css$/,loader:'style!css'
		},
	}
	,
	plugins:[

	new htmlWebpackPlugin({
		filename:'two.html',
//		filename:'index-[hash].html',
		template:'index.html',
 		inject:body,                 //放置的标签位置
		title:'哈哈',
 
 
		
	})
	
	]
}

devServer:{
    contentBase:path.resolve(__dirname,'dist'),// 配置开发服务运行时的文件根目录
    host:'localhost',// 开发服务器监听的主机地址
    compress:true,   // 开发服务器是否启动gzip等压缩
    port:8044        // 开发服务器监听的端口
}

"scripts": {
    "dev": "webpack-dev-server --open --mode development "
}

