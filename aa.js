function Func() {}
Func.prototype.num = 2;
var a = new Func();
console.log(a.num); // 2
a.num = 1;
console.log(a.num); // 1
console.log(Func.prototype.num) // 2