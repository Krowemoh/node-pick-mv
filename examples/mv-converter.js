const mv = require("../src/mv");

const str = "1þ3ý4ý6ü7û8";
const array = mv.MVToArray(str);

console.log("String: " + str);
console.log("Array: ", array);
