"use strict";

var _index = require("./index");

console.log(_index.pi);
console.log((0, _index.power)(_index.pi, _index.pi));
var f = new _index.Foo();
console.log(f.foo());
console.log(f.bar());