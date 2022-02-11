const helpers = require("./helpers");

const str = "ZEROüATTR1";
const array = helpers.MVToArray(str);

console.log("String: " + str);
console.log("Array: " + array);
console.log("String Again: " + helpers.ArrayToMV(str));
