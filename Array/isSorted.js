// To check if an Array is sorted
// >notArry,asc,desc,congruence,unSorted,meanless
var isSorted = function (arr) {
    if (!Array.isArray(arr))
        return 'notArry';
    if (arr.length <= 1)
        return 'meanless';
    var sortType = 'asc';
    var len = arr.length;
    var preUnit = 0;
    var nowUnit = 0;
    var count = 0;
    for (var j = 1; j < len; j++) {
        preUnit = arr[j - 1];
        nowUnit = arr[j];
        if (preUnit === nowUnit) {
            count++;
            if (count === len - 1) {
                return 'congruence';
            }
        }
        else {
            if (nowUnit < preUnit) {
                sortType = 'desc';
                break;
            }
        }
    }
    for (var i = 1; i < len; i++) {
        if (sortType === 'asc') {
            if (arr[i - 1] > arr[i])
                return 'unSorted';
        }
        else {
            if (arr[i - 1] < arr[i])
                return 'unSorted';
        }
    }
    return sortType;
};
module.exports = isSorted;
