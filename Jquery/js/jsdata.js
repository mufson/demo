 function getRandom(n){
        return parseInt(Math.floor(Math.random()*n+1));
        }


 function get100 () {
 	return parseInt(getRandom(40)+80);
 }
 var str11,str12,str21,str22,str31,str32,str41,str42,str51,str52,str61,str62,str71,str72,str81,str82;
 //资产总计上年全年
 setInterval(function(){
 	
  str11 = parseInt(getRandom(2000)+1000);
 $('.body_4').eq(0).find('input').val(str11);
 //资产总计今年全年
 $('.body_5').eq(0).find('input').val( str11 +get100());
 
  //负债上年全年
   str21 = parseInt(getRandom(400)+100);
 $('.body_4').eq(1).find('input').val(str21);
 //负债总计今年全年
 $('.body_5').eq(1).find('input').val(str21+getRandom(30) + 100);
 
   //营业收入上年全年
   str31 = parseInt(getRandom(2000)+5000);
 $('.body_4').eq(2).find('input').val(str31);
 //营业收入今年全年
 $('.body_5').eq(2).find('input').val(parseInt(str31/2) + getRandom(30));
 
 
 str41 = parseInt(str31- getRandom(100) - 100);
   //营业成本  上年全年
 $('.body_4').eq(4).find('input').val(str41);
 //营业成本   今年全年
 $('.body_5').eq(4).find('input').val(parseInt(str41/2) + getRandom(30));
 
 str51 =  getRandom(119)+80;
   //营业税金及附加   上年全年
 $('.body_4').eq(6).find('input').val(str51);
 //营业税金及附加   今年全年
 $('.body_5').eq(6).find('input').val(parseInt(str51/2));
 
 
  str61 =  getRandom(150)+200;
   //营业利润  上年全年
 $('.body_4').eq(8).find('input').val(str61);
 //营业利润  今年全年
 $('.body_5').eq(8).find('input').val(parseInt(str61/2));
 
   //利润总额  上年全年
 $('.body_4').eq(9).find('input').val(str61);
 //利润总额 今年全年
 $('.body_5').eq(9).find('input').val(parseInt(str61/2));
 
 str81 = str61 + get100(); 
   //纳税总额  上年全年
 $('.body_4').eq(11).find('input').val(str81);
 //纳税总额 今年全年
 $('.body_5').eq(11).find('input').val(parseInt(str81/2));
 	
 },3000);


 


 $('.body_5').eq(0).find('input').trigger("keydown").trigger("keyup").attr('value',251).val( 200).trigger("onChange");
 $('.body_5').eq(0).find('input').attr('value',251).val( 251);
  var kk =  $('.body_5').eq(0).find('input')[0];
   kk.fireEvent('onchange'); 
  kk.onchange();

 $('.body_5').eq(0).find('input').attr('value',251).val( 251);
var evt = document.createEvent("MouseEvents");
evt.initMouseEvent("onchange", true, true, window,
0, 0, 0, 0, 0, false, false, false, false, 0, null);
document.getElementById('swat').dispatchEvent(evt); 



document.getElementsByTagName('input').dispatchEvent("onchange");
document.getElementsByTagName('input').fireEvent("onchange");
document.getElementById('search-input').fireEvent("onchange");

var evt = document.createEvent("MouseEvents");
evt.initMouseEvent("onchange", true, true, window,
0, 0, 0, 0, 0, false, false, false, false, 0, null);
document.getElementsByTagName('input').dispatchEvent(evt); 



var e = jQuery.Event("keydown");//模拟一个键盘事件
e.keyCode = 49;//keyCode=13是回车

$('.body_5').eq(0).find('input').trigger(e);//模拟按下回车