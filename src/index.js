
exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else if (arguments.array === 0) {
        return 0;
    } else {
        return Math.min(...array)
    }
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else if (arguments.array === 0) {
        return 0;
    } else {
        return Math.max(...array)
    }
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else if (arguments.array === 0) {
        return 0;
    } else {
        var total = 0;
        for(var i = 0; i < array.length; i++) {
            total += array[i];
        }
        var avg = total / array.length;
        return avg;
    }
}
