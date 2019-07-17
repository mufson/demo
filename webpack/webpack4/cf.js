//entry   可执行模块  入口文件
//chunk    多个文件代码块
//loader  文件转换器   es6 转 es5 sass css
//plugin  插件 
_dist 只有在生产环境才引入的资源
_dev 只有在开发环境才引入的资源
_inline  把该资源的内容嵌入到html
_ie 只有ie浏览器才引入

	const {webPlugin} = require('web-webpack-lugin');
	
	module.exports = {
		
		entry:{
			app:'./src/doc/index.js'
		},
		plugins:[
		//一个 webPlugin 对应一个 html 文件
			new WebPlugin({
				//输出的文件名
				filename:"index.html",
//				依赖的js文件
				requires:['app'],
			}),
		],
	}
