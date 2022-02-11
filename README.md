# node-pick-mv

This is a set of helper functions to work with multivalue in javascript.

Here is an example of converting a multivalue string into an array and then back to a multivalue string.

```
const helpers = require("./helpers");

const str = "ZEROüATTR1";
const array = helpers.MVToArray(str);

console.log("String: " + str);
console.log("Array: " + array);
console.log("String Again: " + helpers.ArrayToMV(str));
```
