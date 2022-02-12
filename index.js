const mvConverter = require("./src/mv-converter");
const mvMatrix = require("./src/mv-matrix");

module.exports = {
    MVToArray: mvConverter.MVToArray, 
    ArrayToMV: mvConverter.ArrayToMV,
    MVMatrix: mvMatrix.MVMatrix,
}
