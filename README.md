# pick-mv

This is a set of helper functions to work with multivalue in javascript. The core of these functions is the ability to convert arrays to multivalue and multivalue to arrays.

The code is in the src directory, index is just a testing page.

You can also use these functions to work with multivalue in the same way as in BASIC with positional arguments and indexing that starts at 1.

There are examples in the examples directory of these functions.

## Installation

```
> npm install pick-mv
```

### Convert multivalue to an array:

```
const mv = require("pick-mv");

const str = "1þ3ý4ý6ü7û8";
const array = mv.MVToArray(str);

console.log("String: " + str);
console.log("Array: ", array);

// String: 1þ3ý4ý6ü7û8
// Array:  [ '1', [ '3', '4', [ '6', [Array] ] ] ]
```

### Convert an array to multivalue:

```
const mv = require("pick-mv");

const array = [1, [1,2]];

console.log("Array: ", array);
console.log("String: " +  mv.ArrayToMV(array));

// Array:  [ 1, [ 1, 2 ] ]
// String: 1þ1ý2
```

### Work with arrays BASIC Style:

Building a new array:

```
const mv = require("pick-mv");

let a = mv.MVMatrix();

a[[1]] = 1;
a[[2]] = 2;
a[[2,1]] = 3
a[[2,2]] = 4
a[[2,3]] = 5
a[[2,3,1]] = 6
a[[2,3,2]] = 7
a[[2,3,2,2]] = 8

console.log("MV String: " + a.MVString));
console.log("Test 1: ", a.MVString === "1þ3ý4ý6ü7û8");
console.log("Test 2: ", mv.ArrayToMV(a.source) === "1þ3ý4ý6ü7û8");
console.log("Value at (2,3,1): ", a[[2,3,1]]);

// MV String: 1þ3ý4ý6ü7û8
// Test 1:  true
// Test 2:  true
// Value at (2,3,1):  6
```

MVString is really just a shortcut to doing Test 2, source is the original array that exists and this is what you can use if you need access to functions like map.

MVMatrix can take both an array and a string.

```
const mv = require("pick-mv");

const str = "1þ3ý4ý6ü7û8";
const s = mv.MVMatrix(str);
console.log("Value at (2,3,1): ", s[[2,3,1]]);

const array = mv.MVToArray("1þ3ý4ý6ü7û8"); 
const a = mv.MVMatrix(array);

console.log("Value at (2,3,1): ", a[[2,3,1]]);
```

## Changelog

1.2.0 - Check if the value being referenced by the index is a string before returning an index, if it is a string, then return the entire thing regardless of the index.
