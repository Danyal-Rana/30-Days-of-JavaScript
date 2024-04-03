/**
 * @param {Function} fn
 * @return {Function}
 */



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */


function memoize(fn) {
    let cache = {};
    
    return function(...args) {
        
        let n = JSON.stringify(args);
        
        if (n in cache) {
            return cache[n];
        } else {
            let result = fn.apply(this, args);
            cache[n] = result;
            return result;
        }
    }
}