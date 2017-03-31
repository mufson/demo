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

