/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let myArray = [];
    
    for (let i=0; i<arr.length; i++) {
        
        if (fn(arr[i], i)) {
            myArray.push (arr[i]);
        }
    }
    
    return myArray;    
};