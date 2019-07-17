commonJS 模块化标准
const mdA = require('./moduleA');
module.exports = mdA.sonmeFunc;
AMD 模块化规范
定义一个模块
define('module',['dep'],function(dep){
	return exprots;
})
导入和使用
require(['module'],function(module){
	
})
ES6 模块化
import {readFile} from 'fs';
import React from 'react';

export function hello(){
	
}

export default{
	
}

Typescript javaScript 超集
flow javaScript 超集  静态类检查
scss  /less
	$blue:#aa
	div{
		color:$blue;
	}

代码转换  文件优化  代码分割  模块合并 自动刷新  代码校验  自动发布
grunt gulp fis3  webpack  rollup

module.exports = {
	//模块入口
	entry:'',
	//所有依赖模块打包成一个文件
	output:{
		filename:'bundle.js'
	}
}



























