
exports.min = function min (array) {
    if ((!Array.isArray(array)) || (array.length === 0)) return 0;
    else {
        let minItem = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < minItem) {
                minItem = array[i];
            }
        }
        return minItem;
    }
}

exports.max = function max (array) {
    if ((!Array.isArray(array)) || (array.length === 0)) return 0;
    else {
        let maxItem = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maxItem) {
                maxItem = array[i];
            }
        }
        return maxItem;
    }
}

exports.avg = function avg (array) {
    if ((!Array.isArray(array)) || (array.length === 0)) return 0;
    else {
        return array.reduce((a, b) => (a + b)) / array.length;
    }
}
