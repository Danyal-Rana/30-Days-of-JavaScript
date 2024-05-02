/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }
    else {
        let myArr = Object.keys(obj);
        return myArr.length === 0;
    }
};