// var val = 5;
// // i++;
// var val2 = val++;
// console.log(val);//6
// console.log(val2); //5

var val = {i:5};
console.log(val);
var val2 = Object.assign(val);
val2.i++;
console.log(val);
console.log(val2);