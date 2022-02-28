const mvConverter = require("./mv-converter");

function MVMatrix(array = []) {
    if (typeof array === "string" || array instanceof String) {
        array = mvConverter.MVToArray(array);
    }

    const handler = {
        get(target, keys, receiver) {
            if(isNaN(parseInt(keys))) {
                if (keys === "MVString") {
                    return mvConverter.ArrayToMV(target.slice(0));
                } else if (keys === "source") {
                    return target.slice(0);
                } else {
                    return "This property doesn't exist.";
                }
            }
            const indicies = keys.split(",").map(n => parseInt(n));
            let value = target.slice(0);
            for (const pos of indicies) {
                if (pos > value.length) return '';
                if (typeof value === "string" || value instanceof String) {
                    value = value;
                } else {
                    value = value[pos-1];
                }
            }
            return value;
        },

        set(target, keys, value) {
            const indicies = keys.split(",").map(n => parseInt(n));
            const p = indicies.map(i => i-1);

            if (p.length === 1) {
                if (!Array.isArray(target)) {
                    target = [target];
                }
                target[p[0]] = value;

            } else if (p.length === 2) {
                if (!Array.isArray(target[p[0]])) {
                    target[p[0]] = [target[p[0]]];
                }
                target[p[0]][p[1]] = value;

            } else if (p.length === 3) {
                if (!Array.isArray(target[p[0]][p[1]])) {
                    target[p[0]][p[1]] = [target[p[0]][p[1]]];
                }
                target[p[0]][p[1]][p[2]] = value;

            } else if (p.length === 4) {
                if (!Array.isArray(target[p[0]][p[1]][p[2]])) {
                    target[p[0]][p[1]][p[2]] = [target[p[0]][p[1]][p[2]]];
                }
                target[p[0]][p[1]][p[2]][p[3]] = value;

            } else if (p.length === 5) {
                if (!Array.isArray(target[p[0]][p[1]][p[2]][p[3]])) {
                    target[p[0]][p[1]][p[2]][p[3]] = [target[p[0]][p[1]][p[2]][p[3]]];
                }

                target[p[0]][p[1]][p[2]][p[3]][p[4]] = value;
            }
        },
    };

    return new Proxy(array, handler);
}

module.exports = {
    MVMatrix
}
