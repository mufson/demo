//遍历循环
var ab = [8,25,4,44];
 var bl = ab.forEach(function (value,index,array) {
//	console.log("  index:" + index + 'value:'+value  );
	return value>10;
});

  console.log(bl);
//等价于
var array = [8,25,4,44];
for (var k=0,length= array.length;k<length;k++) {
	console.log("  index:" + k + 'value:'+array[k]  );
	 
}
//对比jq $.each
$.each([],function(index,value,array){
	
});

var database = {
	users:['张涵予','江一燕','李小璐'],
	sendEmail:function(user){
		if(this.isValduser(user)){
			console.log("你好：" + user);
		}else{
			console.log("抱歉不是本人");
		}
	},
	isValduser:function (user) {
		return /^张/.test(user);
	}
};
database.users.forEach(database.sendEmail,database);  //有返回不生成新数组
// [].map(callback,[this.object]);            有返回生成新数组
// [].filter(callback,[this.object]);        有返回生成新数组
// [].some(callback,[this.object]);  || return true false
// [].every(callback,[this.object]); &&  return true false
// 
array.reduce(function (pev,curt,index,array) {     //递归
	console.log("pev" + pev + "   cur" + curt);
	return pev + curt;
},0)

var s = [8];


array.forEach(function (x) {
	console.log(x);
	s = s.concat(x);
})
// s = s.concat(array);
 s = [].concat.apply(array,s);
console.log(s);
 // reduceRight  从末端开始循环
 
var ssk = document.getElementsByTagName('div');
console.log(ssk);

//var sum = [1,2,3,4,10].reduce((x,y)=>x+y);
