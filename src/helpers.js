const delimiterCodes = [254, 253, 252, 251, 250];
const delimiters = delimiterCodes.map(d => String.fromCharCode(d));

function ArrayToMV(arr, depth = 0) {
    if (!Array.isArray(arr) || depth > 5) return arr;
    let delim = delimiters[depth];
    return arr.map(a => ArrayToMV(a, depth+1)).join(delim);
}

function MVToArray(string, depth = 0) {
    if (depth >= 5) return string;
    let delim = delimiters[depth];

    if (delimiters.some(d => string.indexOf(d) !== -1)) {
        let arr = string.split(delim).map(a => MVToArray(a, depth+1));
        return arr;

    } else {
        if (depth === 0) {
            if (string === "") {
                return [];
            }
            return [string];
        } else {
            return MVToArray(string, depth+1)
        }
    }
}

module.exports = {
    ArrayToMV, MVToArray
}
