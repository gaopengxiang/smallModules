// To remove duplicate element in an array
// >notArry
var duPlicateRemove = function (arr) {
    if (!Array.isArray(arr))
        return 'notArry';
    var newArray = arr.filter(function (item, index, self) { return self.indexOf(item) === index; });
    return newArray;
};
module.exports = duPlicateRemove;
