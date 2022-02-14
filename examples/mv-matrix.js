const mv = require("../index");

let a = mv.MVMatrix();

a[[1]] = 1;
a[[2]] = 2;
a[[2,1]] = 3
a[[2,2]] = 4
a[[2,3]] = 5
a[[2,3,1]] = 6
a[[2,3,2]] = 7
a[[2,3,2,2]] = 8

console.log("MV String: " + a.MVString);
console.log("Test 1: ", a.MVString === "1þ3ý4ý6ü7û8");
console.log("Test 2: ", mv.ArrayToMV(a.source) === "1þ3ý4ý6ü7û8");
console.log("Value at (2,3,1): ", a[[2,3,1]]);
