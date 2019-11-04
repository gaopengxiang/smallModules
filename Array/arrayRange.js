// return a array with the specified range
var arrayRange = function (start, end) {
    var arrStart = start;
    var arrEnd = end;
    var newArry = [];
    if (arrStart === arrEnd || arrStart > arrEnd || typeof arrStart !== 'number') {
        return newArry;
    }
    else if (typeof arrEnd !== 'number' && typeof arrEnd !== 'undefined') {
        return newArry;
    }
    else if (arrEnd === undefined) {
        arrEnd = start;
        arrStart = 0;
    }
    for (var i = arrStart; arrStart <= arrEnd; arrStart++) {
        newArry.push(arrStart);
    }
    return newArry;
};
module.exports = arrayRange;
