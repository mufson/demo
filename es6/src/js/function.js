//  ========== 
//  = 生成多层对象 = 
// 输入 myapp.namespace('myapp.modules.module1');	
// 返回 myapp = {} myapp.modules = {}  myapp.modules.module1 = {}
//  ========== 
myapp.namespace = function (ns_string) {
	
	var parts = ns_string.split('.'),
		parent = myapp,
		i;
		if(parts[0]==='myapp'){
			parts = parts.slice(1);
		}
	//	console.log(parts);
		
		for(i = 0; i<parts.length; i++){
			if(typeof parent[parts[i]] === 'undefined'){
				parent[parts[i]] = {};
			}
			parent = parent[parts[i]];
		}
		return parent;
}

函数对象
name  返回函数的名字
	bind 方法创建的函数 bound 函数名  Function anonymous
object.is 比较两个值是否严格相等
object.assign(target,obj2,obj3)  数组覆盖合并
Object.assign(someClass.prototype,{someMethod(){
	
}},
anotherMethod(){
	
})
 为对象添加方法  克隆对象
 object.getOwnPropertyDescriptor() 获取该属性的描述对象''
 
 

