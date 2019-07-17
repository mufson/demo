$(function(){
	
	
	function sum(arr){
		return arr.reduce(function(x,y){
			return x+y;
		})
	}
	function sum2(arr) {
		var s = function () {
			return arr.reduce(function(x,y){
				return x+y;
			})
		}
		return s;
	}
	
	let k = sum([1,2,4,7]);
//	console.log(k);
	var f = sum2([1,2,4,7]);
//	console.log(f());
	
	function count() {
		var arr = [];
		
		for (var i = 0; i <= 3; i++) {
			arr.push((function(x){
				return function(){
					
					return x*x;
				}
			})(i))
		}
		return arr;
	}
	
	var results = count();
	let f1 = results[0];
	let f2 = results[2];
//	console.log(results);
//	console.log(f1());
//	console.log(f2());
	
	function creat(int) {
		var x = int || 0;
		
		return{
			inc:function(){
				x+=1;
//				console.log(x);
			}
		}
		
	}
	
	var c1 = creat();
	c1.inc()
	c1.inc()
	c1.inc()
	
	var c2 = creat(10);
	c2.inc()
	c2.inc()
	c2.inc()
	
	function make_pow(n) {
		return function (x) {
			return Math.pow(x,n)
		}
	}
	
	var pow2 =  make_pow(2);
	var pow3 =  make_pow(3);
//	console.log(pow2(5));
//	console.log(pow3(5));
	
	var fx = x=>x*x;
	
//	console.log(fx(5));
	
	let x = ()=>336 ;
	
	var arr = [10, 20, 1, 2];
	
	arr.sort((x, y) => {
   		return x>y?1:-1;
	});
	//console.log(arr);
	
	function fib(max){
		
		var 
		t,a=0,b=1,arr=[0,1];
		
		while(arr.length<max){
			[a,b] = [b,a+b];
			arr.push(b);
		}
		return arr;
	}
	
	
//	console.log(fib(5));
//	console.log(fib(10));
	
	function* fib2(max){
		
		var t,a=0,b=1,n=0;
		
		while(n<max){
			yield a;
			[a,b] = [b,a+b];
			n++;
		}
		return;
	}
	var f5= fib2(10);
//	console.log(f5.next());
//	console.log(f5.next());
//	console.log(f5.next());
//	console.log(f5.next());
//	console.log(f5.next());
//	console.log(f5.next());

	function* lib3(max){
		var 
		t,a=0,b=1,n=0;
		
		while(n<max){
			yield a;
			[a,b] = [b,a+b];
			n++;
		}
		return;
	}
	for (let x of lib3(10)) {
//		console.log(x);
	}
	
	function* next_id(){
		var id=0;
		
		while(1){
			yield ++id;
		}
	}
	
	var nid = next_id();
	 for (let x=0;x<10;x++) {
	 	
//	 	console.log(nid.next());
	 }
	
	function student (name) {
		
		this.name = name;
		this.hello = function () {
		//	console.log("he",this.name,"!");
		}
		
	}
 
 	function st22 () {
 		this.sa2 = function(){
 	//		console.log("sa2");
 		}
 	}
 	
 	var F1 = function () {};
 	 F1.prototype = student.prototype;
 	
	 st22.prototype = new F1();
	 st22.prototype.constructor = st22;
	 st22.prototype.avc = function(){
	 //	console.log("svc");
	 }
	 
	var xm = new student('小明');
	var xm2 = new st22('小明');
//	console.log(xm.name);
	xm.hello();
	//console.log(xm);
 
	student.prototype.st = function(){
	//	console.log("st");  
	}
	xm.st();
 	
 	class son {
 		constructor(n){
 			this.name = n||'匿名';
 		}
 		say(){
 //			console.log(this.name);
 		}
 	}
 	class per extends son{
 	 	constructor(n){
 			super(n);
 		}	
 		
 	}
 	var ss = new son();
 	var ssp = new per('df');
 	
 	ss.say();
 	ssp.say();
	
// 	location.assign('http://www.baidu.com');
// 	location.replace('http://www.baidu.com');
	
	var ghk,sid,pid;
	
	sid = document.getElementById('sid');
	pid = document.getElementById('pid');
	ghk = document.getElementsByClassName('ghk')[0];
	let snde = `<p>1</p>
		 <p>2</p>
		 <p>3</p>`;
		 
//	 sid.appendChild(ghk);
//	 pid.innerHTML = snde;
//	console.log(ghk[0].innerHTML);
	//console.log(sid.innerHTML);

// 通过querySelector获取ID为q1的节点：
//var q1 = document.querySelector('#sid');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
//var ps = q1.querySelectorAll('div.highlighted > p');

	///***************************************************************************//
/*	
	var list = document.getElementById('test-list'),li = list.children;

	  let aa = Array.prototype.slice.call(li).sort((a,b)=>{a.innerText>=b.innerText});
	  
	  aa.forEach(v=>{
	  	list.appendChild(v)
	  })
	  */
	 
	 		
 
/*	   let imageFile,imagePw,fileInfo;
	   
	   imageFile = document.getElementById('imageFile');
	   imagePw = document.getElementById('imagePw');
	   info = document.getElementById('fileInfo');
	 
	   imageFile.addEventListener('change',function(){
	   	
	   		 imagePw.src = '';
	   		if (!imageFile.value) {
	   			info = '没有选择文件';
	   			return;
	   		}
	   		console.log(imageFile);
	   		let file = imageFile.files[0];
	   		
	   		info.innerHTML = file.name+file.size+file.lastModifiedDate;
	   		
	   		var reader = new FileReader();
	   		reader.onload= function(e){
	   			 
	   			 imagePw.src = e.target.result;
	   		}
	   		reader.readAsDataURL(file)
	   })*/
	   
	 function test(resolve,reject){
	 	var timeout = Math.random()*2;
	 	
	 	console.log(timeout);
	 	
	 	setTimeout(()=>{
	  		if (timeout < 1) {
	       //     console.log('call resolve()...');
	            resolve('200 OK');
	        }
	        else {
	     //       console.log('call reject()...');
	            reject('timeout in ' + timeout + ' seconds.');
	        }
	 	},timeout*1000)
	 	
	 }
	 
	 
/*	 new Promise(test).then((e)=>{
	 	console.log(e);
	 }).catch(e=>{
	 	
	 	console.log("错误",e);
	 })*/
	 
	 function multiply(i){
	 	
	 	return new Promise((rs,rj)=>{
	 	//	console.log(i);
	 		setTimeout(rs,500,i*i);
	 	})
	 }
	 function add(i){
	 	
	 	return new Promise((rs,rj)=>{
	 	//	console.log(i);
	 		setTimeout(rs,500,i+i);
	 	})
	 }
	var p = new Promise((rs,rj)=>{
	 	 
	 		rs(5);
	 	})
	multiply(5).then(multiply).then(add).then(x=>{
//		console.log(x);
	})
	
	
	var p1 = new Promise((rs,rj)=>{
		setTimeout(rs,500,'P1')
	})
	var p2 = new Promise((rs,rj)=>{
		setTimeout(rs,500,'P2')
	})
	var p3 = new Promise((rs,rj)=>{
		setTimeout(rs,502,'p3')
	})
	var p4 = new Promise((rs,rj)=>{
		setTimeout(rs,501,'p4')
	})
/*	
	Promise.all([p1,p2]).then(rs=>{
		console.log(rs);
	})
	
	Promise.race([p3,p4]).then(x=>{
		console.log(x);
	})*/
	
	// JSONP 跨域请求数据。
	// CORS  
	// 反向代理
	
	function log1(){
		console.log("log1");
	}
	function log2(){
		console.log("log2");
	}
	function log3(){
		console.log("log3");
	}
	class aa{
		
		 constructor(){
		 	
		 }
		
		p1(x){
			console.log("p1");
			this.p3();
			return this;
		}
		p2(f){
			console.log('p2');
			this.ff = f;
			console.log(this);
		}
		p3(x){
			console.log("p3");
		 
			 setTimeout(()=>{
			 	this.p4()
			 },10)
//			 setTimeout(this.p4,10);
		}
		p4(){
			console.log("p4");
 			this.ff()
			 
		}
		 
	}
 
// 	  new aa().p1().p2(log1);
	
	
	class Error{
		constructor(m){
			this.m = m;
			this.name= 'Error';
		//	this.stack = <nested calls>;
		}
	}
	class MyError extends Error{
		
		constructor(m){
			super(m)
			this.name = this.constructor.name;
		}
	}
	class VidError extends MyError{
		constructor(m){
			super(m);
			 
		}
	}
	function test(){
		throw new VidError('whoops');
	}
	
	try{
		test()
		
	}catch(err){
//		console.log(err);
	}
	
	var rescore = [
		{
			subject:'math',
			score:88
		},
		{
			subject:'chinese',
			score:95
		},
		{
			subject:'english',
			score:80
		},
	];
	let dis = {
		math:0.5,
		chinese:0.3,
		english:0.2
		
	}
	var resum = rescore.reduce((x,y)=>{
		return y.score + x;
	},0)
	var presum = rescore.reduce((x,y)=>{
		return dis[y.subject]*y.score + x;
	},0)
	//console.log(presum);
	
	var arrSr = 'paabbakmxaakhb';
	
	var arrsm  = arrSr.split('').reduce((res,cur)=>{
		res[cur]?res[cur]++:res[cur]=1;
		return res
	},{})
	
//	console.log(arrsm);

	var sg = [1,2].reduce((res,cur)=>{
		res.push(cur*cur);
		return res;
	},[])
//	console.log(sg);
	
	 function* hel(){
	 	
	 	yield 'h1';
	 	yield 'h2';
	 	yield 'h3';
	 	return 'edd';
	 }
	var hw = hel();
//	console.log(hw.next());
//	console.log(hw.next());
//	console.log(hw.next());
//	console.log(hw.next());
	
//	https://m.douban.com/rexxar/api/v2/gallery/topic/51644/items?sort=hot&start=20&count=20&ck=&for_mobile=1
	
//	https://m.douban.com/rexxar/api/v2/gallery/topic/51644/items?sort=hot&start=0&count=20&ck=&for_mobile=1

 
	/*		
		fetch("https://m.douban.com/rexxar/api/v2/gallery/topic/51644/items?sort=hot&start=10&count=20&status_full_text=1&guest_only=0&ck=null", {
				
			  method: "GET",
			  headers: {
			      "Content-Type": "application/json",
			  },
			  
			}).then(function(res) {
			  if (res.status === 200) {
			      return res.json()
			  } else {
			      return Promise.reject(res.json())
			  }
			}).then(function(data) {
		
			 console.log(data);
	  
			}).catch(function(err) {
			  console.log(err);
			});*/

function getImage(url){
//  console.log(url);
    // 把现在的图片连接传进来，返回一个不受限制的路径
    if(url !== undefined){
        return url.replace(/^(http)[s]*(\:\/\/)/,'https://images.weserv.nl/?url=');
    }
}

var sumData = [],
	smget=[],
	ist = 0,
	istadd = 5,
	locking = false;
 	function smgetData(){
 		 
 		
		
		for (var i = ist; i <= istadd; i++) {
	
			smget.push(getdata(i));
		}
	 	ist = istadd+1;
	 	istadd = istadd+istadd;
 		 
 	}
	
	function getdata (ft) {
		 return new Promise(function(resolve, reject) {	
			fetch("https://m.douban.com/rexxar/api/v2/gallery/topic/51644/items?sort=hot&start="+20*ft+"&count=20&ck=&for_mobile=1", {
				
			  method: "GET",
			  headers: {
			      "Content-Type": "application/json",
			  }
			}).then(function(res) {
			  if (res.status === 200) {
			      return res.json()
			  } else {
			      return Promise.reject(res.json())
			  }
			}).then(function(data) {
		
			  sumData = [...sumData,...data.items];
			  resolve(data);
	  
			}).catch(function(err) {
			  console.log(err);
			});
		});
	}
	var shDt = [],errid;
	function getinfo () {
		smgetData();
		Promise.all(smget).then(data=>{
		  // ...
		
		  
		   data.forEach(x=>{
		  	x.items.forEach(y=>{
		  		if(y.abstract.indexOf('深圳')>-1){
		  			
		  			shDt.push(y);
		  		}
		  	})
		  })
		   
		//   console.log(shDt);
		   
		 try{
		 	
			 	shDt = shDt.map(function(x){
			   	 	errid = x;
			   	 	
			 	   if(x.target.status && x.target.status.images){
			 	   	
			 	  	  x.target.status.images = x.target.status.images.map(function(y){
			 	  	 	y.normal.url= getImage(y.normal.url)
			 	  	 	return y;
			 	  	 })
			 	   }
			 	  	 return x;
			 	  })
			 
		 }catch(err){
		 	console.log(errid);	
		 	console.log(err);	
		 }
	//	 console.log(shDt);
		let node,
		p = $('.plt');
		node =shDt.map(x=>`
				<li >
					<a href="${x.target.status?x.target.status.sharing_url:''}" target="_blank"><p>${x.abstract}</p></a>
					${x.target.status && x.target.status.images.map(y=>`
						
						<a href="${y.large.url}" target="_blank"><img src= "${y.normal.url}" /></a>
					`).join('')}
				</li>
			`);
	
		p.append(node);
		 
 		console.log(shDt.length);
			locking = false;
			sumData=[];
			shDt=[];
			smget=[];
			
			
		}).catch(data=>{
		  // ...
		}).finally(()=>{
		 
		});
	}
//	getinfo();
	 $(window).scroll(function(){
	 	
	　　var scrollTop = $(this).scrollTop();
	　　var scrollHeight = $(document).height();
	　　var windowHeight = $(this).height();
 
	//scrollTop + windowHeight < scrollHeight
	　　if(scrollHeight-(scrollTop + windowHeight) <600&&!locking){
 		 locking = true;
	　　　　getinfo();
	　　}
	});
	
	const preloadImage = function(path){
		return new Promise((res,rej)=>{
			const img = new Image();
			img.onload = function(){
				console.log(img.width);
				res(img)
			};
			img.onerror = rej;
			img.src = path;
		})
	}
	
	preloadImage('img/angular.png').then((x)=>{
		console.log(x);
	})
	
})
/*
var reducers = {  
  totalInEuros : function(state, item) {
    return state.euros += item.price * 0.897424392;
  },
  totalInYen : function(state, item) {
    return state.yens += item.price * 113.852;
  }
};

var manageReducers = function(reducers) {
  return function(state, item) {
    return Object.keys(reducers).reduce(
      function(nextState, key) {
        reducers[key](state, item);
        return state;
      },
      {}
    );
  }
};

var bigTotalPriceReducer = manageReducers(reducers);
var initialState = {euros:0, yens: 0};
var items = [{price: 10}, {price: 120}, {price: 1000}];
var totals = items.reduce(bigTotalPriceReducer, initialState);
console.log(totals);

console.log(bigTotalPriceReducer);*/

 

 