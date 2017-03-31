$(function(){
	
	$('#left_typeUl_t400 li').click(function(){
		
		$(this).addClass('left_menu1_cur').removeClass('left_menu1').siblings().addClass('left_menu1').removeClass('left_menu1_cur');
		
	});
	function getUrlParam(name){
	   	
			var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			var r = window.location.search.substr(1).match(reg);  //匹配目标参数
			if (r!=null) return unescape(r[2]); return null; //返回参数值
		
		} 
		
	var  typeVal = getUrlParam('TypeId');
	switch (typeVal)
		{
		case 29:
		 setBkground('left_typeLi_t400_1');
		  break;
		case 134:
		  setBkground('left_typeLi_t400_2');
		  break;
		}
	
	function setBkground(id){
		$('#' + id).addClass('left_menu1_cur').removeClass('left_menu1');
	}
})


function PAWAModelToObject(value,index){
        if(index>5){console.error("存储层级太深");return value}
        if (value && typeof value === 'object' && value instanceof PAWA.PAWAModel) {//认为存储的是model
            value.attributes.__isModel__ = true;
            value.attributes.__ModelObject__ = {};
            _.each(value.__proto__,function(obj,name){
                if(name!="constructor"){
                    if(Object.prototype.toString.call(obj)==="[object Function]"){
                        value.attributes.__ModelObject__[name]=(obj.toLocaleString())
                    }else if(Object.prototype.toString.call(obj)==="[object Object]"){
                        value.attributes.__ModelObject__[name] = PAWAModelToObject(obj,index++)
                    }else {
                        value.attributes.__ModelObject__[name]=obj
                    }
                }
            });
        }
        return value;
    }

    function ObjectToPAWAModel(value){
        if (value && typeof value === 'object' && value.__isModel__) {
            delete value.__isModel__;
            if (!value.toJSON) {
                var __ModelObject__ ={};
                _.each(value.__ModelObject__,function(obj,name){
                    if(Object.prototype.toString.call(obj)==="[object String]"&&/^function/.test(obj)){
                        eval("__ModelObject__."+name+"="+obj);
                    }else if(Object.prototype.toString.call(obj)==="[object Object]"){
                        __ModelObject__[name] = ObjectToPAWAModel(obj)
                    }else {
                        __ModelObject__[name] = obj;
                    }
                });
                var newModel = PAWA.PAWAModel.extend(__ModelObject__);
                delete value.__ModelObject__;
                value = new newModel(value);
            }
        }
        return value;
    }