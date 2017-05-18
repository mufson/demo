"use strict";

var pipeline = function pipeline() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (val) {
    return funcs.reduce(function (a, b) {
      return b(a);
    }, val);
  };
};

var plus1 = function plus1(a) {
  return a + 1;
};
var mult2 = function mult2(a) {
  return a * 2;
};
var mult3 = function mult3(a) {
  return a + 2;
};
var addThenMult = pipeline(plus1, mult2, mult3);
console.log(addThenMult(5));