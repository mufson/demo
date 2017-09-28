$(function() {
		var id = 1;
		var sonid = 1;
		var lastnode = "";  //最后一次操作的节点
	//	var dataobj = {name:'',txt:'',url:'',cur:'txt'};
		// {name:'',txt:'',url:'',cur:'txt'}  cur txt  文字  url 链接 son 有子菜单
//		JSON.stringify(formtempData);   转成JSON数据
//		JSON.parse(data.data);          解析JSON数据
 		var node = `<div class="menu">
				
				<span>新菜单</span>
				<div class="child">
					<span class="addSon">增加</span>
				</div>
			</div>`;
		
		var sonNode = `<span>子菜单</span>`;
		
		var backData = [
		{
			name:'1',type:'son',
			child:[
				{name:'123',key:'1231',type:'click'},
				{name:'456',url:'baidu.com',type:'url'},
			]
		},
		{
			name:'2',key:'',url:'',type:'son',
			child:[
				{name:'123',key:'1231',type:'click'},
				{name:'456',url:'baidu.com',type:'url'},
			]
		},
		{
			name:'3',key:'',url:'',type:'son',
			child:[
				{name:'123',key:'1231',type:'click'},
				{name:'456',url:'baidu.com',type:'url'},
			]
		},
		];
		
	//	init();
		
		function init() {
			var menuobj,sonobj,menuData,sonData;
			console.log("init");
			backData.forEach(function(x){
			console.log("backData");
				
				$('.addNode').before(node);
				menuobj = $('.addNode').prev();
				menuData = Object.assign({name:'',key:'',url:'',type:'click'},{name:x.name,key:x.key,url:x.url,type:x.type});
				menuobj.children("span").data("info",menuData);
	 	 	 	if (x.name) {
	 	 	 		menuobj.children("span").text(x.name);
	 	 	 	}
				sonobj = menuobj.find(".addSon");
				console.log(sonobj);
				x.child.forEach(function(y){
					console.log("son");
					sonobj.after(sonNode);
					sonData = Object.assign({name:'',key:'',url:'',type:'click'},{name:y.name,key:y.key,url:y.url,type:y.type});
					sonobj.next().data("info",sonData);
					if (y.name) {
		 	 	 		sonobj.next().text(y.name);
		 	 	 	}
				})
				if (x.child.length==5) {
					sonobj.hide();
				}
			})
			if (backData.length==3) {
					$(".addNode").hide();
			}
			 
		}
	   
	 	$(".addNode").click(function(){

	 		var len = $(".menu").length;
	 	 	
	 	 	console.log("增加菜单操作");

	 		 if (len==3) {
	 		 	$(".addNode").hide();
	 		 }
	 		 if (len==4) {
	 		 	return false;
	 		 }
	 		$(this).before(node);
	 		console.log(len);
	 		$(this).prev().children("span").data("info",{name:'',key:'',url:'',type:'click'});
	 		$(this).prev().trigger("click");
	 		 
	 	})
	 	$("body").on("click",".addSon",function(){
	 		 
	 		var len = $(this).parent().children().length;
	 	 	if (len==5) {
	 	 		$(".addSon").hide();
	 	 	}
	 		 if (len==6) {
	 		 	return false;
	 		 }
	 		$(this).after(sonNode);
	 		$(this).next().data("info",{name:'',key:'',url:'',type:'click'});
	 	 	$(this).next().trigger("click");

	 	})
	 	
	 	$("body").on("click",".child span",function(event){
	 		if ($(this).hasClass('addSon')) {
	 			return false;
	 		} 
	 			console.log("子菜单单击");
	 			$(".cur_li").removeClass("cur_li");
	 			$(this).addClass("cur_li") ;
	 			data = $(this).data("info");
	 	 	 	//存在上次操作的节点
	 	 	 	setShow(data);
	 	 	 	lastnode = $(this);
	 	 	 	
	 	 	 	  event.stopPropagation();
	 		
	 	})	
	 		
	 	$("body").on("click",".menu",function(){
	 		var isopen,sonlen,
	 		data,info_cur,son_index,son_sum;
	 		
	 			console.log("主菜单单击");
	 		
	 		  son_sum = $(".menucat li");
	 		  info_cur = $(".cur_cat")
			  son_index = son_sum.index(this);
	 	 	  isopen = $(this).hasClass("addNode");
	 	  	  sonlen = $(this).find(".child").children();
	 	  	 
	 	 	 if (!isopen) {
	 	 	 	$(this).addClass("cur_li").find(".child").show().end().siblings().removeClass('cur_li').find(".child").hide();
	 	 	  	$(".cur_li").removeClass("cur_li");
	 			$(this).addClass("cur_li") 
	 	 	 	data = $(this).children("span").data("info");
	 	 	 	//存在上次操作的节点
	 	 	 		setShow(data);
	 	 	 		lastnode = $(this).children("span");
	 	 	 	
	 	 	 }
	 	 	  
	 	 	  
	 	 	 
	 	})
	 	
	 	//信息写回上一次操作的节点
	 	function setShow (data,isclear) {
	 		var updata={},sonlen,ismenu;
 
	 		if (lastnode) {
	 			ismenu = lastnode.parent().hasClass("menu")?true:false;			
	 				
	 				updata = lastnode.data("info");
	 			
		 		updata.name = $(".menuName").val();
	 	 	 	switch (updata.type){
	 				case 'click':
	 					updata.key = $(".areaInfo").val();
	 					break;
	 				case 'url':
	 					updata.url = $(".inputInfo").val();
	 					 
	 					break;
	 			}
	 	 	 	if (ismenu) {
	 	 	 		  sonlen = lastnode.next().children().length;
	 	 	 		  if (sonlen>1) {
	 	 	 		  	updata.type = "son";
	 	 	 		  }
	 	 	 	}
	 	 	 		
	 	 	 	if (updata.name) {
	 	 	 		lastnode.text(updata.name);
	 	 	 	}
	 	 	 	
	 	 	 	
	 	 	 	lastnode.data("info",updata);
	 	 	 	 
	 		}
	 		if (isclear) {
	 			return false;
	 		}
	 		//清除和回写当前选择的信息
	 		clearInfo(data);
 	 	 	
	 	}
	 	
		//设置公共区域的信息
		function clearInfo (data) {
			$(".opertarea").show(); 
			$(".menuName").val(data.name);
			switch (data.type){
	 			case 'click':
			 		$(".menucat,.menuinfo").show();
				 	$(".inputInfo").val("");
				 	$(".areaInfo").val(data.key);
				 	
			 		$(".menucat li").eq(0).addClass("cur_cat").siblings().removeClass('cur_cat');
				 	$(".menuinfo li").eq(0).show().siblings().hide();
					break;
				case 'url':
			 		$(".menucat,.menuinfo").show();
				 	$(".inputInfo").val(data.url);
			 		$(".areaInfo").val("");
			 		$(".menucat li").eq(1).addClass("cur_cat").siblings().removeClass('cur_cat');
			 		$(".menuinfo li").eq(1).show().siblings().hide();
					break;
				case 'son':
			 		$(".menucat,.menuinfo").hide();
					break;
	 				 
	 
	 			}
		 
		}
		
		$(".menucat li").click(function(x){
			var sum_li = $(".menucat li");
			var index = sum_li.index(this);
			console.log(index);
			var updata = lastnode.data("info");
			if (index==0) {
				updata.type = 'click';
			}else if(index==1){
				updata.type = 'url';
			}
			lastnode.data("info",updata);
			$(this).addClass("cur_cat").siblings().removeClass('cur_cat');
			 
			$(".menuinfo li").eq(index).show().siblings().hide();
		})
	 
		
 		$(".save").click(function(){
 			
 			var menus = $(".menu");
 			var fordata = [] ;
 			setShow({},true);
 			 $(".menu").each(function(){
 			 	var data = {},info;
 			 	if(!$(this).hasClass('addNode')){
 			 		info = $(this).children("span").data("info");
 			 		data.name = info.name;
 			 		data.type = info.type;
		 	 	 	switch (info.type){
		 				case 'click':
		 					data.key = info.key; 
		 					break;
		 				case 'url':
		 					data.url = info.url;  
		 					break;
		 			}
 			 	}
 			 	data.child = [];
 			 	$(this).find(".child").children().each(function(){
 			 		
 			 		var son = {},sonInfo;
 			 		 if(!$(this).hasClass('addSon')){
	 			 		sonInfo = $(this).data("info");
	 			 		son.name = sonInfo.name;
	 			 		son.type = sonInfo.type;
			 	 	 	switch (sonInfo.type){
			 				case 'click':
			 					son.key = sonInfo.key; 
			 					break;
			 				case 'url':
			 					son.url = sonInfo.url;  
			 					break;
			 			}
			 	 	 data.child.push(son);	
	 			 	} 			 	
 			 	})
 			 	if (data.type) {
 			 		
 			 		fordata.push(data);
 			 	}
 			 })
 			 var  formtempData = JSON.stringify(fordata);
 			 
 			console.log("发送数据",formtempData);
 			var parData =JSON.parse(formtempData);  
 			console.log("解析数据",parData);
 			
 		})
		$(".del").click(function(){
			var ismenu = lastnode.parent().hasClass("menu")?true:false;		
			var parent,opert,updata;
			parent=lastnode.parent();
			if (ismenu) {
				
				lastnode.parent().remove();
			}else{
				lastnode.remove();
				if (parent.children().length==1) {
					 opert = parent.prev();
					 updata = opert.data("info");
					 updata.type = "click";
					 updata.key = "";
					  opert.data("info",updata);
				}
			}
			lastnode = "";
			$(".opertarea").hide(); 	
		})
//		$(".opertarea").show(); 	
		
})