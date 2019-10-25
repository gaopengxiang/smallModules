var arryFlatten = function (arry, res) {
    if (!Array.isArray(arry))
        return 'notArry';
    var arr = 0;
    for (var i = 0, len = arry.length; i < len; i++) {
        arr = arry[i];
        Array.isArray(arr) ? arryFlatten(arr, res) : res.push(arr);
    }
    return res;
};
module.exports = function (arry) {
    return arryFlatten(arry, []);
};
