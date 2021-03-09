exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return Math.min.apply(Math, array);
    }
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return Math.max.apply(Math, array);
    }
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let summary = 0;
        for (let i = 0; i < array.length; i++) {
            summary += array[i];
        }
        let answer = summary / array.length;
        return answer;
    }
};
