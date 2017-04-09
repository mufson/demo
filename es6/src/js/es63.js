
//import { area, circumference } from 'circle';
function init() {
  var name = "Mozilla"; // name是被init创建的局部变量
  function displayName() { // displayName()是一个内部函数,
    console.log(name); // 它是一个使用在父函数中声明的变量的闭包
  } 
  displayName();
}
init();  

function makeFunc() {
  var name = "name2222";
  function displayName() {
    console.log(name);  
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

(function ctr (x) {
	console.log(x);
}(55))