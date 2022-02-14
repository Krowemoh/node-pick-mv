const mv = require("../index");

const array = mv.MVToArray("1þ3ý4ý6ü7û8"); 
const a = mv.MVMatrix(array);

console.log("Value at (2,3,1): ", a[[2,3,1]]);
