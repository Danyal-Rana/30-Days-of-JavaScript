/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    var myCounter = n;
    
    return function() {
        return myCounter++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */